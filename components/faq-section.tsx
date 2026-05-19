"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "A camisa é original da CBF?",
    answer: "Nossas camisas são réplicas de alta qualidade, inspiradas nos modelos oficiais. Utilizamos tecido premium com tecnologia similar às originais, garantindo conforto e durabilidade. São perfeitas para torcer, jogar e usar no dia a dia.",
  },
  {
    question: "E se o tamanho não servir? Posso trocar?",
    answer: "Sim! Oferecemos garantia de troca em até 7 dias após o recebimento. Se o tamanho não servir, basta entrar em contato pelo WhatsApp que realizamos a troca sem custo adicional.",
  },
  {
    question: "Quanto tempo demora para chegar?",
    answer: "O prazo de entrega é de 5 a 7 dias úteis para todo o Brasil. Enviamos com código de rastreio para você acompanhar sua encomenda em tempo real.",
  },
  {
    question: "O pagamento via PIX é seguro?",
    answer: "Sim! Utilizamos a plataforma do Mercado Pago para processar os pagamentos, garantindo total segurança. O PIX é aprovado instantaneamente e você recebe a confirmação na hora.",
  },
  {
    question: "Vocês têm CNPJ? Como sei que não é golpe?",
    answer: "Somos uma empresa regularizada com CNPJ ativo. Além disso, temos milhares de clientes satisfeitos e avaliações positivas. Você pode verificar nossos depoimentos e entrar em contato pelo WhatsApp para tirar qualquer dúvida.",
  },
  {
    question: "Posso parcelar no cartão?",
    answer: "No momento, trabalhamos apenas com PIX para oferecer o melhor preço possível. O desconto exclusivo que oferecemos é válido apenas para pagamentos via PIX.",
  },
  {
    question: "A camisa desbota ou o escudo descola depois de lavar?",
    answer: "Não! Nossas camisas são produzidas com tecido de alta qualidade e o escudo é bordado, não estampado. Seguindo as instruções de lavagem (água fria e sem alvejante), sua camisa vai durar por muitos anos.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600">
            Tirou suas dúvidas? Garante a sua agora antes que esgote.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#1a1a1a]">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#modelos"
            className="inline-flex items-center gap-2 bg-[#009739] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#007a2e] transition-colors text-lg"
          >
            TIREI MINHAS DÚVIDAS — QUERO COMPRAR 🇧🇷
          </a>
        </div>
      </div>
    </section>
  )
}
