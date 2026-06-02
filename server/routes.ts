import type { Express } from "express";
import { createServer, type Server } from "http";
import { getUncachableResendClient } from "./resend";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Lead submission endpoint - sends email notification
  app.post("/api/leads", async (req, res) => {
    try {
      const { name, email } = req.body;

      if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
      }

      // Send email notification using Resend
      const { client, fromEmail } = await getUncachableResendClient();

      await client.emails.send({
        from: fromEmail,
        to: "ryan@shiftsystems.ai",
        subject: "New Client Request",
        html: `
          <h2>New Client Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
        `,
        text: `New Client Request\n\nName: ${name}\nEmail: ${email}`,
      });

      res.json({ success: true, message: "Lead submitted successfully" });
    } catch (error) {
      console.error("Error submitting lead:", error);
      res.status(500).json({ error: "Failed to submit lead" });
    }
  });

  app.post("/api/qr-lead", async (req, res) => {
    try {
      const name = clean(req.body?.name);
      const businessName = clean(req.body?.businessName);
      const email = clean(req.body?.email).toLowerCase();

      if (!name || !businessName || !email) {
        return res.status(400).json({ ok: false, message: "Name, business name, and email are required." });
      }

      if (!isValidEmail(email)) {
        return res.status(400).json({ ok: false, message: "Please enter a valid email address." });
      }

      const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;

      if (!webhookUrl) {
        console.error("Missing N8N_LEAD_WEBHOOK_URL for QR prompt capture");
        return res.status(500).json({ ok: false, message: "The prompt request could not be sent." });
      }

      const n8nResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.N8N_WEBHOOK_SECRET ? { "x-webhook-secret": process.env.N8N_WEBHOOK_SECRET } : {}),
        },
        body: JSON.stringify({
          name,
          businessName,
          email,
          source: "shift-prompt-page",
          page: "/prompt",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!n8nResponse.ok) {
        const responseText = await n8nResponse.text().catch(() => "");
        console.error("QR prompt workflow failed", n8nResponse.status, responseText.slice(0, 500));
        return res.status(502).json({ ok: false, message: "The prompt request could not be sent." });
      }

      return res.json({ ok: true });
    } catch (error) {
      console.error("Error submitting QR prompt lead:", error);
      return res.status(500).json({ ok: false, message: "The prompt request could not be sent." });
    }
  });

  return httpServer;
}
