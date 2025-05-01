import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function GET() {
  return NextResponse.json({ status: 'ok' })
}

export async function POST(request: Request) {
  try {
    const { name, lastname, email, phone, message } = await request.json();
    if (!name || !lastname || !email || !phone || !message) {
      return NextResponse.json({ error: 'missing-fields' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'invalid-email' }, { status: 400 })
    }
    if (!/^\+?\d{1,4}[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(phone)) {
      return NextResponse.json({ error: 'invalid-phone' }, { status: 400 })
    }
    if (message.length < 10) {
      return NextResponse.json({ error: 'message-too-short' }, { status: 400 })
    }
    if (name.length < 1) {
      return NextResponse.json({ error: 'name-too-short' }, { status: 400 })
    }
    if (lastname.length < 2) {
      return NextResponse.json({ error: 'lastname-too-short' }, { status: 400 })
    }
    if (message.length < 10) {
      return NextResponse.json({ error: 'message-too-short' }, { status: 400 })
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'rparr@freeforce-global.com',
      // to: 'gavingogaming@gmail.com',
      subject: `FFG Contact from ${name} ${lastname}`,
      text: `Name: ${name} ${lastname}
Email: ${email}
Phone: ${phone}

Message:
${message}`,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'send-failed' }, { status: 500 })
  }
}
