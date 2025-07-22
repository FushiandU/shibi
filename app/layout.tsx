import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Serif, Montserrat } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Buy My Dubai Home - Dubai Real Estate & E-commerce Expert",
  description:
    "Empower your future with Shibi Kabeer, Dubai's premier real estate and e-commerce expert. Discover tax-free investments and business growth strategies.",
  keywords: ["Dubai real estate", "property investment", "Golden Visa", "UAE entrepreneur", "e-commerce consulting"],
  authors: [{ name: "Shibi Kabeer" }],
  creator: "Shibi Kabeer",
  publisher: "Shibi Kabeer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shibikabeer.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Buy My Dubai Home - Dubai Real Estate & E-commerce Expert",
    description: "Empower your future with Shibi Kabeer, Dubai's premier real estate and e-commerce expert.",
    url: "https://shibikabeer.com",
    siteName: "Shibi Kabeer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buy My Dubai Home - Dubai Real Estate Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy My Dubai Home - Dubai Real Estate & E-commerce Expert",
    description: "Empower your future with Shibi Kabeer, Dubai's premier real estate and e-commerce expert.",
    images: ["/og-image.jpg"],
    creator: "@shibikabeer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSerif.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
