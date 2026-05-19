"use client"

import { Mail, Phone, Shield, Package, Truck, CreditCard } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Camisas do Brasil</h3>
            <p className="text-gray-400">
              A melhor loja de camisas da Seleção Brasileira. Modelos atuais, retrô e edições especiais.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Garantias</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#d4a853]" />
                Compra 100% segura
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#d4a853]">✅</span>
                Troca garantida em até 7 dias
              </li>
              <li className="flex items-center gap-2">
                <Package className="w-4 h-4 text-[#d4a853]" />
                Envio para todo o Brasil
              </li>
              <li className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#d4a853]" />
                Pagamento via PIX
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4a853]" />
                storye@brasil.com.br
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4a853]" />
                (11) 92684-1693
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          © 2026 Camisas do Brasil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
