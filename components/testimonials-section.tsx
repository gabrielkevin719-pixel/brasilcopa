"use client"

import { Star, MapPin, CheckCircle } from "lucide-react"

const testimonials = [
  {
    name: "Amanda Souza",
    location: "Rio de Janeiro, RJ",
    image: "https://storyebrasil.com.br/assets/cliente-rafael-B4WzjwZd.webp",
    text: "Comprei pra presentear meu marido e ele AMOU! Qualidade absurda, parece a oficial mesmo. Chegou em 6 dias no RJ.",
    product: "Camisa Brasil Oficial 2024",
  },
  {
    name: "Rafael Tavares",
    location: "Belo Horizonte, MG",
    image: "https://storyebrasil.com.br/assets/cliente-carlos-Bl4Yau6m.webp",
    text: "Cara, melhor custo-benefício que já vi! A camisa preta e dourada é SENSACIONAL, recebi muitos elogios usando no jogo. Recomendo demais!",
    product: "Camisa Black Edition",
  },
  {
    name: "Carlos Mendes",
    location: "São Paulo, SP",
    image: "https://storyebrasil.com.br/assets/cliente-juliana-f05uh61B.webp",
    text: "Tecido top, costura perfeita e o escudo bordado é um show à parte. Já é minha terceira compra. Atendimento no WhatsApp nota 10!",
    product: "Camisa Retrô Penta 2002",
  },
  {
    name: "Juliana Ferreira",
    location: "Curitiba, PR",
    image: "https://storyebrasil.com.br/assets/cliente-marcos-BsSDSN7X.webp",
    text: "Fiquei com medo de ser pegadinha pelo preço, mas chegou tudo certinho! Caimento perfeito no corpo feminino. Já indiquei pra todas as amigas.",
    product: "Camisa Brasil Feminina",
  },
  {
    name: "Marcos Albuquerque",
    location: "Recife, PE",
    image: "https://storyebrasil.com.br/assets/cliente-patricia-UhDG1FG-.webp",
    text: "Sou colecionador e posso afirmar: é IDÊNTICA à oficial. Tecido respirável, ótimo pro calor do Nordeste. Voltarei a comprar com certeza!",
    product: "Camisa Brasil Oficial 2024",
  },
  {
    name: "Patrícia Lima",
    location: "Salvador, BA",
    image: "https://storyebrasil.com.br/assets/cliente-bruno-B7cAUnCk.jpg",
    text: "Comprei 3 camisas pra família toda usar na Copa América. Chegou antes do prazo e o PIX foi super tranquilo. Vamos torcer juntos!",
    product: "Kit Família Brasil",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Quem vestiu, aprovou!
          </h2>
          <p className="text-gray-600 mb-6">
            Mais de 12.000 brasileiros já estão com a camisa da Seleção em casa.
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-[#d4a853] text-[#d4a853]" />
            ))}
          </div>
          <p className="text-lg font-semibold">
            4.9/5 <span className="text-gray-500 font-normal">(2.347 avaliações)</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#1a1a1a]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-[#d4a853] text-[#d4a853]" />
                ))}
              </div>

              <p className="text-gray-700 mb-4">{`"${testimonial.text}"`}</p>

              <p className="text-sm text-gray-500 flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Compra verificada • {testimonial.product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
