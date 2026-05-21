import './globals.css'

export const metadata = {
  title: 'Jeremiah Winford',
  description: 'CIS Student at Louisiana Tech University | U.S. Army Signal Support Systems Specialist',
  keywords: ['Jeremiah Winford', 'CIS', 'Louisiana Tech', 'cybersecurity', 'networking', 'portfolio'],
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
