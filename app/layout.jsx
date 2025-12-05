import './globals.css'

export const metadata = {
  title: "Dhanashri Patil — Software Test Engineer | Resume",
  description: "Professional resume of Dhanashri Patil - Software Test Engineer with expertise in automation and manual testing, skilled in Cypress, Selenium, and Appium.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Dhanashri Patil — Software Test Engineer",
    description: "Check out my professional resume and portfolio. I'm a Software Test Engineer with expertise in automation, QA, and testing methodologies.",
    url: "https://dhanashri-resume.vercel.app",
    siteName: "Dhanashri Patil Resume",
    images: [
      {
        url: "https://dhanashri-resume.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dhanashri Patil - Software Test Engineer Resume",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanashri Patil — Software Test Engineer",
    description: "Professional resume and portfolio",
    images: ["https://dhanashri-resume.vercel.app/og-image.png"],
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
