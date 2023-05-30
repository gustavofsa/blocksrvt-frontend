'use client'

import { useWindowSize } from '@/hooks/useWindowSize'
import { ArrowRight, X } from 'lucide-react'
import { useState } from 'react'

export function CallToAction() {
  const { width } = useWindowSize()
  const [isClosed, setIsClosed] = useState(false)

  const isMobile = !!width && width <= 767

  return !isClosed || !isMobile ? (
    <div className="fixed bottom-0 z-10 flex w-screen flex-col items-center justify-center gap-4 bg-gray-900 px-3.5 py-3 text-center md:bottom-auto md:top-0 md:flex-row">
      {isMobile && (
        <button
          className="align-center flex justify-center gap-1 leading-tight text-white"
          onClick={() => setIsClosed(true)}
        >
          Fechar <X color="#fff" width={18} />
        </button>
      )}
      <p className="leading-relaxed text-white">
        Não limite sua criatividade, junte-se a familia Blocks por apenas{' '}
        <span className="font-semibold">BRL 19,99</span>
      </p>
      <button className="group flex items-center justify-center gap-10 rounded-lg bg-gradient-to-r from-[#A11CF3] from-0% to-[#D835C5] to-100% px-4 py-3 font-semibold leading-tight text-white hover:from-[#dfacff19] hover:to-[#dfacff19]">
        Quero ser Premium
        <span className="flex items-center justify-center gap-2">
          <div className="h-4 w-px bg-white group-hover:bg-[#6F6F6F]" />
          <ArrowRight color="#fff" size={18} />
        </span>
      </button>
    </div>
  ) : (
    <></>
  )
}
