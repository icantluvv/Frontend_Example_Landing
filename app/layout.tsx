import type { Metadata } from "next"
import "@/globals.css"
import { montserrat, inter } from "@/public/fonts/fonts"

export const metadata: Metadata = {
  title: "Goals",
  description: ""
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
