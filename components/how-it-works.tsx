"use client"

import { MousePointer, CreditCard, Truck } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: MousePointer,
    title: "Escolha sua camisa",
    description: "Selecione modelo e tamanho (do P ao XGG). Mais de 6 modelos disponíveis.",
  },
  {
    number: "2",
    icon: CreditCard,
    title: "Pague no PIX",
    description: "Aprovação imediata, sem cadastro de cartão. Seguro via Mercado Pago.",
  },
  {
    number: "3",
    icon: Truck,
    title: "Receba em casa",
    description: "Entrega rastreada em 5 a 7 dias úteis para todo o Brasil.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
          Como Funciona em 3 passos
        </h2>
        <p className="text-gray-600 mb-12">
          Do clique à entrega — simples, rápido e 100% seguro.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-gray-50 rounded-2xl p-8 text-center"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#d4a853] rounded-full flex items-center justify-center text-black font-bold text-sm">
                {step.number}
              </div>
              <div className="w-16 h-16 mx-auto mb-4 bg-[#d4a853]/10 rounded-full flex items-center justify-center">
                <step.icon className="w-8 h-8 text-[#d4a853]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <a
          href="#modelos"
          className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#333] transition-colors"
        >
          ESCOLHER MINHA CAMISA →
        </a>
      </div>
    </section>
  )
}
