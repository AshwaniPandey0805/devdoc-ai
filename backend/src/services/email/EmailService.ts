import nodemailer, { Transporter } from "nodemailer";

export interface SendEmailResult {
  sent: boolean;
  messageId?: string;
  devResetUrl?: string;
}

export class EmailService {
  private static transporter: Transporter | null = null;

  private static getTransporter(): Transporter | null {
    if (!this.transporter && process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        this.transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "587", 10),
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
        console.log(`📧 EmailService: Configured SMTP transport (${process.env.SMTP_HOST})`);
      } catch (err: any) {
        console.warn(`⚠️ EmailService: SMTP setup failed (${err.message}). Falling back to console logging.`);
        this.transporter = null;
      }
    }
    return this.transporter;
  }

  /**
   * Sends a password reset email or logs to console in development.
   */
  public static async sendPasswordResetEmail(
    toEmail: string,
    resetUrl: string,
    recipientName?: string
  ): Promise<SendEmailResult> {
    const transporter = this.getTransporter();
    const fromAddress = process.env.SMTP_FROM || '"DevDocs AI Support" <noreply@devdocs.ai>';

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 30px; border: 1px solid #e2e8f0; rounded: 12px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 24px;">
          <h2 style="color: #2563eb; margin: 0; font-size: 24px;">DevDocs AI</h2>
          <p style="color: #64748b; font-size: 14px; margin-top: 4px;">Developer Knowledge & Document QA</p>
        </div>
        
        <p style="color: #1e293b; font-size: 16px; line-height: 1.5;">
          Hello ${recipientName || "there"},
        </p>
        <p style="color: #334155; font-size: 14px; line-height: 1.6;">
          We received a request to reset the password for your DevDocs AI account associated with <strong>${toEmail}</strong>.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetUrl}" style="background-color: #2563eb; color: #ffffff; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; display: inline-block;">
            Reset Password
          </a>
        </div>

        <p style="color: #64748b; font-size: 12px; line-height: 1.5;">
          This link will expire in <strong>15 minutes</strong>. If you did not request this password reset, please ignore this email or contact support if you have concerns.
        </p>
        
        <hr style="border: none; border-top: 1px solid #f1f5f9; margin: 24px 0;" />
        <p style="color: #94a3b8; font-size: 11px; text-align: center;">
          © ${new Date().getFullYear()} DevDocs AI. All rights reserved.
        </p>
      </div>
    `;

    // 1. If SMTP configured, dispatch real email
    if (transporter) {
      try {
        const info = await transporter.sendMail({
          from: fromAddress,
          to: toEmail,
          subject: "DevDocs AI — Password Reset Request",
          text: `Reset your DevDocs AI password by clicking: ${resetUrl} (Link expires in 15 minutes).`,
          html: htmlContent,
        });

        console.log(`📧 [EmailService] Password reset email sent to ${toEmail} (ID: ${info.messageId})`);
        return { sent: true, messageId: info.messageId };
      } catch (err: any) {
        console.error(`❌ [EmailService] SMTP send error:`, err.message);
      }
    }

    // 2. Dev console fallback
    console.log("\n==================================================================");
    console.log("             🔑 [DEV AUTH] PASSWORD RESET LINK                   ");
    console.log("==================================================================");
    console.log(`Recipient: ${toEmail}`);
    console.log(`Reset URL: ${resetUrl}`);
    console.log("Expires:   15 minutes from now");
    console.log("==================================================================\n");

    const isDev = process.env.NODE_ENV !== "production";
    return {
      sent: true,
      devResetUrl: isDev ? resetUrl : undefined,
    };
  }
}
