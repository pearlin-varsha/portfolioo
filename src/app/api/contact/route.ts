import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Zod Schema to validate contact form submissions on the backend
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate inputs
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.format() },
        { status: 400 }
      );
    }
    
    const { name, email, company, subject, message } = result.data;
    const resendApiKey = process.env.RESEND_API_KEY;
    const host = request.headers.get("host") || "";
    const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1");

    if (isLocalhost || !resendApiKey) {
      // Local/Offline mock mode fallback for immediate developer testing
      console.log("\n==================================================");
      console.log(`📬 [MOCK MODE${isLocalhost ? " - LOCALHOST DETECTED" : ""}] NEW PORTFOLIO CONTACT SUBMISSION`);
      console.log(`From: ${name} <${email}>`);
      console.log(`Company: ${company || "Not Provided"}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log("==================================================\n");
      
      return NextResponse.json(
        { 
          success: true, 
          message: `Message received in mock mode (${isLocalhost ? "localhost detected - email not sent" : "RESEND_API_KEY is not set"}).` 
        },
        { status: 200 }
      );
    }

    // Initialize Resend
    const resend = new Resend(resendApiKey);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["pearlin.varsha2006@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #2D2D2D; line-height: 1.6; border: 1px solid #E4EEFC; border-radius: 12px; padding: 24px; background-color: #FAFBFD;">
          <h2 style="color: #0A66C2; border-bottom: 2px solid #D0E1FD; padding-bottom: 8px; margin-top: 0;">New Contact Form Message</h2>
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Company/Organization:</strong> ${company || "Not Provided"}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #ECF2FA; border-left: 4px solid #93B6FC; padding: 16px; border-radius: 4px; margin-top: 20px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #E4EEFC; margin-top: 30px;" />
          <p style="font-size: 0.85em; color: #5A6065; margin-bottom: 0;">Sent via Personal Portfolio Site Contact Form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Email Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Internal Server Error in contact API route:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Internal Server Error", details: errorMessage },
      { status: 500 }
    );
  }
}
