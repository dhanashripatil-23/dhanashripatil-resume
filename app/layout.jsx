import './globals.css'

export const metadata = {
  title: "Dhanashri Patil — Software Test Engineer | Resume",
  description: "Professional resume of Dhanashri Patil - Software Test Engineer with expertise in automation and manual testing, skilled in Cypress, Selenium, and Appium.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-black text-gray-100 antialiased">{children}</body>
    </html>
  )
}
