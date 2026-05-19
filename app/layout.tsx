import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Camisas do Brasil - Loja Oficial da Seleção Brasileira",
  description: "A melhor loja de camisas da Seleção Brasileira. Modelos atuais, retrô e edições especiais.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-white`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
