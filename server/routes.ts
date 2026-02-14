import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getUncachableResendClient } from "./resend";

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

  return httpServer;
}
