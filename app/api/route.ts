import { createEmailBody } from '@/lib/createEmailBody'
import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	try {
		const { username, phone, email, items } = await request.json()
		console.log('items: ', items)

		const html = createEmailBody({ username, phone, email, items })

		const subject = 'Новая заявка с https://www.nsp-healthshop.ru/'

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: false,
			logger: true,
			debug: true,
			tls: {
				rejectUnauthorized: true
			},
			auth: {
				user: process.env.SMTP_LOGIN,
				pass: process.env.SMTP_PASS
			}
		})

		const emailRes = await transporter.sendMail({
			from: process.env.SMTP_LOGIN,
			to: process.env.SMTP_TO,
			subject,
			html: html
		})

		console.log('Message sent: %s', emailRes.messageId)
		return NextResponse.json({ status: 200, msg: 'Email is sent' })
	} catch (err) {
		console.error('Error sending email:', err)
		return NextResponse.json({
			status: 500,
			err,
			msg: 'Unexpected server error'
		})
	}
}
