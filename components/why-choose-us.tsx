"use client"

import { Sparkles, Shirt, Shield, Truck } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Tecido Premium",
    description: "Material de alta qualidade, leve e respirável.",
  },
  {
    icon: Shirt,
    title: "Modelagem Perfeita",
    description: "Caimento impecável que valoriza qualquer corpo.",
  },
  {
    icon: Shield,
    title: "Conforto e Durabilidade",
    description: "Feita para durar, lavagem após lavagem.",
  },
  {
    icon: Truck,
    title: "Envio Rápido",
    description: "Entrega para todo o Brasil com rastreio.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Por que escolher a gente?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#d4a853]/20 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-[#d4a853]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
