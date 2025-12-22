import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const data = await req.json()

  await resend.emails.send({
    from: "MJ Clinic <onboarding@resend.dev>",
    to: ["dr.mtseaobg@gmail.com"],
    replyTo: data.email,
    subject: "New Appointment Booking",
    html: `
      <h2>New Appointment</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Date:</b> ${data.date}</p>
      <p><b>Time:</b> ${data.time}</p>
      <p><b>Consultation:</b> ${data.consultationType}</p>
      <p><b>Message:</b> ${data.message}</p>
    `,
  })

  return NextResponse.json({ success: true })
}
