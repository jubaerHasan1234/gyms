import nodemailer from "nodemailer";

export type OtpEmailPurpose =
  | "email-verification"
  | "password-reset"
  | "security-code";

interface SendOtpEmailParams {
  to: string;
  otp: string;
  purpose: OtpEmailPurpose;
}

const EMAIL_COPY: Record<
  OtpEmailPurpose,
  { heading: string; intro: string; subject: string }
> = {
  "email-verification": {
    heading: "Verify your email address",
    intro: "Use this code to verify your Kratos Fitness account.",
    subject: "Your Kratos Fitness verification code",
  },
  "password-reset": {
    heading: "Reset your password",
    intro: "Use this code to continue resetting your Kratos Fitness password.",
    subject: "Your Kratos Fitness password reset code",
  },
  "security-code": {
    heading: "Your security code",
    intro: "Use this code to continue securely with Kratos Fitness.",
    subject: "Your Kratos Fitness security code",
  },
};

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function getSmtpConfig() {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASSWORD;
  const isGmailAccount = Boolean(user && /@gmail\.com$/i.test(user));
  const host = process.env.SMTP_HOST?.trim() || (isGmailAccount ? "smtp.gmail.com" : undefined);
  const from = process.env.SMTP_FROM?.trim() || user;
  const port = Number.parseInt(
    process.env.SMTP_PORT || (isGmailAccount ? "465" : "587"),
    10
  );

  if (!host || !user || !pass || !from || Number.isNaN(port)) {
    throw new Error("SMTP email delivery is not configured.");
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE.toLowerCase() === "true"
      : isGmailAccount || port === 465,
    auth: { user, pass },
    from,
  };
}

/** Sends an OTP directly from the server; OTP values must never be returned to the browser. */
export async function sendOtpEmail({ to, otp, purpose }: SendOtpEmailParams) {
  const config = getSmtpConfig();
  const copy = EMAIL_COPY[purpose];
  const recipient = to.trim();
  const safeOtp = escapeHtml(otp);

  if (!recipient || !otp) {
    throw new Error("An email recipient and OTP are required.");
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.auth,
  });

  await transporter.sendMail({
    from: config.from,
    to: recipient,
    subject: copy.subject,
    text: `${copy.intro}\n\nYour code: ${otp}\n\nIf you did not request this code, you can safely ignore this email.`,
    html: `
      <div style="font-family:Arial,sans-serif;color:#171717;line-height:1.5">
        <h1 style="font-size:24px">${copy.heading}</h1>
        <p>${copy.intro}</p>
        <p style="font-size:28px;font-weight:700;letter-spacing:6px">${safeOtp}</p>
        <p style="color:#525252;font-size:14px">If you did not request this code, you can safely ignore this email.</p>
      </div>
    `,
  });
}
