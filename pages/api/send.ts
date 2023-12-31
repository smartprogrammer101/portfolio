import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['smartlife1257@gmail.com'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'Smart' }),
    text: 'Hi! I'
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
