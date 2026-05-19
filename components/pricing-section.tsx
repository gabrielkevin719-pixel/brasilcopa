"use client"

import { Check, Gift, Truck, Shield, CreditCard } from "lucide-react"

const items = [
  { icon: Check, text: "Camisa oficial Brasil (modelo à sua escolha)", price: "R$ 249,90" },
  { icon: Truck, text: "Frete rastreado para todo o Brasil", price: "R$ 39,90" },
  { icon: Shield, text: "Garantia de troca em 7 dias", price: "Incluso" },
  { icon: Gift, text: "Bônus: brinde surpresa da Seleção 🇧🇷", price: "R$ 29,00" },
  { icon: CreditCard, text: "Aprovação imediata via PIX", price: "Incluso" },
]

export function PricingSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#d4a853] to-[#b8923f] text-black">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block bg-black/10 text-black px-4 py-1 rounded-full text-sm font-medium mb-4">
          🎁 OFERTA COMPLETA
        </span>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Tudo que você leva por <span className="underline">R$ 112</span>
        </h2>
        <p className="text-black/70 mb-8">
          Veja o valor real do que está incluso na sua compra.
        </p>

        <div className="bg-white/20 backdrop-blur rounded-2xl p-6 mb-8">
          <ul className="space-y-4 text-left">
            {items.map((item, index) => (
              <li key={index} className="flex items-center justify-between py-2 border-b border-black/10 last:border-0">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-black" />
                  <span className="font-medium">{item.text}</span>
                </div>
                <span className="font-semibold">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 mb-8">
          <p className="text-sm text-black/70">Valor total:</p>
          <p className="text-2xl line-through text-black/50">R$ 318,80</p>
          <p className="text-sm text-black/70">Hoje, no PIX, por apenas:</p>
          <p className="text-5xl font-bold">R$ 112</p>
          <p className="text-lg font-semibold">💰 Você economiza R$ 206,80</p>
        </div>

        <a
          href="#modelos"
          className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#333] transition-colors text-lg"
        >
          QUERO GARANTIR POR R$ 112 →
        </a>

        <p className="mt-6 text-sm text-black/70">
          🔒 Pagamento seguro • 📦 Envio em 24h • 🔄 Troca grátis em 7 dias
        </p>
      </div>
    </section>
  )
}
