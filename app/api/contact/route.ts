import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // only require the truly mandatory fields
    const required = ['name','email','preferredContact','message'];
    const missing = required.find((f) => !body[f]);
    if (missing) {
      return NextResponse.json(
        { ok: false, error: `Missing required field: ${missing}` },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY!);
    const { error } = await resend.emails.send({
      from: 'DossX Contact <contactform@dossx.com>',
      to:   'hello@dossx.com',
      subject: `🔔 New inquiry at DossX - ${body.name}`,
      html: `
        <h2>New inquiry from dossx.com</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Company:</strong> ${body.company || '—'}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Role:</strong> ${body.role || '—'}</p>
        <p><strong>Preferred Contact:</strong> ${body.preferredContact}</p>
        ${body.preferredContact === 'Phone' ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
        <p><strong>Timeline:</strong> ${body.timeline || '—'}</p>
        <p><strong>Heard About:</strong> ${body.heardAbout || '—'}</p>
        <p><strong>Message:</strong><br/>${body.message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('[CONTACT_API_ERROR]', err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}