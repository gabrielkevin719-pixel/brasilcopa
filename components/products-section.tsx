"use client"

import { useState } from "react"
import { Search } from "lucide-react"

const products = [
  {
    id: 1,
    tag: "Edição Tetra",
    tagEmoji: "🧥",
    name: "Jaqueta Brasil Retrô 1994 Masculino",
    description: "Jaqueta retrô oficial do Tetra! Inspirada no clássico de 1994, com design ousado em verde, amarelo, azul e branco. Tecido premium e acabamento impecável.",
    oldPrice: "R$ 189,90",
    price: "R$167,00",
    image: "https://storyebrasil.com.br/assets/jaqueta-1994-1-DIRteSYB.webp",
  },
  {
    id: 2,
    tag: "Copa 2026",
    tagEmoji: "🔥",
    name: "Camiseta Masculina Brasil Personalizada - Copa do Mundo 2026",
    description: "A nova camisa II da Seleção rumo à Copa 2026! Design ousado em azul royal e preto com o icônico Jumpman da Jordan. Tecnologia Dry-Fit para máxima performance.",
    oldPrice: "R$ 189,90",
    price: "R$97,90",
    image: "https://storyebrasil.com.br/assets/brasil-2026-1-E1oLqLlO.webp",
  },
  {
    id: 3,
    tag: "Novo 2025",
    tagEmoji: "🚀",
    name: "Camisa Brasil Seleção Brasileira 2025 Lançamento",
    description: "O lançamento oficial 2025! Amarelinha com detalhes em verde vibrante, gola polo moderna e tecnologia Dry-Fit. A nova era da Seleção começa aqui.",
    oldPrice: "R$ 189,90",
    price: "R$97,90",
    image: "https://storyebrasil.com.br/assets/brasil-2025-1-N-bBGnuX.webp",
  },
  {
    id: 4,
    tag: "Mais Vendida",
    tagEmoji: "⭐",
    name: "Brasil Oficial 2024",
    description: "A amarelinha oficial. Tecido respirável, design moderno e o orgulho de vestir o Brasil.",
    oldPrice: "R$ 189,90",
    price: "R$97,90",
    image: "https://storyebrasil.com.br/assets/2024-home-1-9RZ9xY_P.webp",
  },
  {
    id: 5,
    tag: "Lançamento",
    tagEmoji: "🆕",
    name: "Brasil Away 2024",
    description: "Azul imponente com detalhes em amarelo. Para quem quer se destacar com estilo.",
    oldPrice: "R$ 189,90",
    price: "R$97,90",
    image: "https://storyebrasil.com.br/assets/jersey-away-2024-alt-BSseyA8e.webp",
  },
  {
    id: 6,
    tag: "Pentacampeão",
    tagEmoji: "🏆",
    name: "Brasil 2002 Retrô",
    description: "A camisa do Penta! Reviva a glória de Ronaldo, Rivaldo e Ronaldinho.",
    oldPrice: "R$ 189,90",
    price: "R$97,90",
    image: "https://storyebrasil.com.br/assets/retro-2002-1-I3WI64tD.webp",
  },
  {
    id: 7,
    tag: "Lendária",
    tagEmoji: "👑",
    name: "Brasil 1970 Clássica",
    description: "A camisa de Pelé na Copa do México. Um ícone eterno do futebol mundial.",
    oldPrice: "R$ 189,90",
    price: "R$97,90",
    image: "https://storyebrasil.com.br/assets/retro-1970-1-BNodD59k.webp",
  },
  {
    id: 8,
    tag: "Tetracampeão",
    tagEmoji: "🇧🇷",
    name: "Brasil 1994 Retrô",
    description: "Tetra! O estilo inconfundível dos anos 90 com toda a nostalgia do título nos EUA.",
    oldPrice: "R$ 189,90",
    price: "R$97,90",
    image: "https://storyebrasil.com.br/assets/retro-1994-1-veOi2_ds.webp",
  },
  {
    id: 9,
    tag: "Tetra Azul",
    tagEmoji: "🔵",
    name: "Camisa Futebol Brasil Retrô II Copa do Mundo 1994 Azul Masculina",
    description: "A icônica camisa II azul do Tetra de 94! Gola polo branca clássica, escudo CBF bordado e estampa Umbro autêntica. Nostalgia pura para colecionadores.",
    oldPrice: "R$ 189,90",
    price: "R$97,90",
    image: "https://storyebrasil.com.br/assets/retro-1994-azul-1-CHwf15sH.webp",
  },
  {
    id: 10,
    tag: "Dri-FIT",
    tagEmoji: "💧",
    name: "Camiseta Brasil Dri-FIT Nike Primary Masculina",
    description: "A nova Primary da Seleção! Estampa exclusiva em azul petróleo com tecnologia Dri-FIT Nike, escudo CBF bordado e swoosh amarelo. Conforto e estilo para os verdadeiros torcedores.",
    oldPrice: "R$ 189,90",
    price: "R$97,90",
    image: "https://storyebrasil.com.br/assets/drifit-primary-1-COnTnyJb.webp",
  },
  {
    id: 11,
    tag: "Edição Limitada",
    tagEmoji: "✨",
    name: "Brasil Edição Black Gold",
    description: "Edição especial comemorativa em preto e dourado. Elegância e exclusividade.",
    oldPrice: "R$ 189,90",
    price: "R$97,90",
    image: "https://storyebrasil.com.br/assets/black-gold-1-BshCxj_c.webp",
  },
  {
    id: 12,
    tag: "Exclusiva",
    tagEmoji: "🎯",
    name: "Camisa Seleção Brasil 2022/23 Away",
    description: "Azul vibrante com mangas estampadas em verde. O modelo away que marcou a Copa de 2022.",
    oldPrice: "R$ 189,90",
    price: "R$97,90",
    image: "https://storyebrasil.com.br/assets/away-2022-1-CdITBB5A.webp",
  },
  {
    id: 13,
    tag: "Clássica",
    tagEmoji: "🔵",
    name: "Brasil Away Retrô 2002",
    description: "A azul do Penta com colarinho clássico. Nostalgia e estilo em uma só camisa.",
    oldPrice: "R$ 189,90",
    price: "R$97,90",
    image: "https://storyebrasil.com.br/assets/away-retro-2002-1-BzfUPr2B.webp",
  },
]

export function ProductsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="modelos" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Nossos Modelos
          </h2>
          <p className="text-gray-600">
            Escolha sua camisa e vista o orgulho brasileiro
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <span className="absolute top-3 left-3 bg-[#d4a853] text-black text-xs font-semibold px-3 py-1 rounded-full z-10">
                  {product.tagEmoji} {product.tag}
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {hoveredId === product.id && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity">
                    <span className="text-white font-medium flex items-center gap-2">
                      Ver Detalhes <Search className="w-4 h-4" />
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-[#1a1a1a] mb-2 line-clamp-2 min-h-[48px]">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 min-h-[40px]">
                  {product.description}
                </p>

                <div className="mb-4">
                  <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-[#009739]">{product.price}</span>
                    <span className="text-sm text-gray-500">via PIX</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 border border-[#1a1a1a] text-[#1a1a1a] py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
                    Ver Detalhes
                  </button>
                  <button className="flex-1 bg-[#009739] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#007a2e] transition-colors text-sm">
                    Comprar Agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
