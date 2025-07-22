import nodemailer from 'nodemailer';
import { supabase } from './supabaseClient';

export async function getSmtpSettings() {
  const { data, error } = await supabase.from('settings').select('key, value');
  if (error) throw new Error('Failed to fetch SMTP settings');
  const settings: Record<string, string> = {};
  for (const row of data) {
    settings[row.key] = row.value;
  }
  return {
    host: settings.smtp_host,
    port: Number(settings.smtp_port),
    auth: {
      user: settings.smtp_user,
      pass: settings.smtp_password,
    },
    from: settings.from_email,
    fromName: settings.from_name,
  };
}

export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}) {
  const smtp = await getSmtpSettings();
  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465, // true for 465, false for other ports
    auth: smtp.auth,
  });
  await transporter.sendMail({
    from: `${smtp.fromName || ''} <${smtp.from}>`,
    to,
    subject,
    text,
    html,
  });
} 