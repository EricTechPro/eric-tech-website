import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "EricTech - Software Engineer & Tech Consultant",
  description: "Expert in AI, Full-stack Development, Web3, and Career Growth. Watch tutorials and book consultations.",
  keywords: [
    "software engineer",
    "tech consultant",
    "AI development",
    "full-stack development",
    "web3",
    "career growth",
    "tech tutorials",
    "software consulting",
    "eric tech",
    "erictech"
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
