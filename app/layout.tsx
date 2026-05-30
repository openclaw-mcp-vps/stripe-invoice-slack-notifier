import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Invoice Slack Notifier — Get Stripe payment alerts in Slack',
  description: 'Posts formatted payment notifications to Slack channels when Stripe invoices are paid. Built for solo freelancers and small agencies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1a291ab8-9217-425b-9c67-0d46d36e2df5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
