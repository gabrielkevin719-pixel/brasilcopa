import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Brasil Copa - Camisas de Futebol",
  description: "Loja de camisas de futebol do Brasil",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body>{children}</body>
    </html>
  )
}
