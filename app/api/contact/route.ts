import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Basic validation
    const required = ['name', 'email', 'service', 'budget', 'message'];
    if (required.some((f) => !body[f])) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'DossX Contact <noreply@dossx.com>',
      to: 'hello@dossx.com',
      subject: `🔔 New inquiry from ${body.name}`,
      html: `
        <h2>New inquiry from dossx.com</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Company:</strong> ${body.company || '—'}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Budget:</strong> ${body.budget}</p>
        <p><strong>Message:</strong><br/>${body.message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      // Pass Resend’s error back to the client for easier debugging
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('[CONTACT_API_ERROR]', err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}