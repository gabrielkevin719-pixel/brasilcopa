"use client"

import { Package, Truck, Shield, User } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-[#1a1a1a] text-white py-2 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6 overflow-x-auto">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Package className="w-4 h-4 text-[#d4a853]" />
            <span>Estoque limitado</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Truck className="w-4 h-4 text-[#d4a853]" />
            <span>Envio rápido para todo o Brasil</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Shield className="w-4 h-4 text-[#d4a853]" />
            <span>Compra 100% segura</span>
          </div>
        </div>
        <a href="#" className="flex items-center gap-2 text-[#d4a853] hover:underline whitespace-nowrap">
          <User className="w-4 h-4" />
          <span>Entrar</span>
        </a>
      </div>
    </div>
  )
}
