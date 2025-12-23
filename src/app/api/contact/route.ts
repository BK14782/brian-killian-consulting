import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email } = await req.json();

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      // If your domain is verified in Resend, this will work.
      // If not, we'll adjust the "from" in the next step.
      from: "Brian Killian Consulting <no-reply@briankillianconsulting.com>",
      to: ["brian@briankillianconsulting.com"],
      replyTo: email,
      subject: "New site inquiry",
      text: `New inquiry from website:\n\nFirst name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\n`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
