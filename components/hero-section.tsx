"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const banners = [
  {
    image: "https://storyebrasil.com.br/assets/hero-banner-1-B4kj0LPA.webp",
    mobileImage: "https://storyebrasil.com.br/assets/hero-mobile-1-C0nVQ3Qc.webp",
  },
  {
    image: "https://storyebrasil.com.br/assets/hero-banner-2-YrfUq8Vx.webp",
    mobileImage: "https://storyebrasil.com.br/assets/hero-mobile-2-B4jYGi5a.webp",
  },
  {
    image: "https://storyebrasil.com.br/assets/hero-banner-3-C3xmH5Yi.webp",
    mobileImage: "https://storyebrasil.com.br/assets/hero-mobile-3-hfzDX0pr.webp",
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => setCurrent(index)
  const prev = () => setCurrent((current - 1 + banners.length) % banners.length)
  const next = () => setCurrent((current + 1) % banners.length)

  return (
    <section className="relative bg-[#1a1a1a] overflow-hidden">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={banner.mobileImage} />
              <img
                src={banner.image}
                alt="Camisa premium da Seleção Brasileira"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        ))}

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Banner anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Próximo banner"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? "bg-[#d4a853]" : "bg-white/50"
              }`}
              aria-label={`Ir para banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
