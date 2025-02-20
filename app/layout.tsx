import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import CustomCursor from "@/components/custom-cursor"

const inter = Inter({ subsets: ["latin"] })

const display = localFont({
  src: "../public/fonts/ST-SimpleSquare.otf",
  variable: "--font-display",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${display.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}