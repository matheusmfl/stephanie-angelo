'use client'
import Image from 'next/image'
import separator from '@/assets/separator.svg'
import separatorMobile from '@/assets/mobileSeparator.svg'

import { Button } from './ui/button'
import { CarouselBase } from './CarouselBase'
// import { CardFeedback } from './CardFeedback'

export function Depositions() {
  return (
    <>
      <div className="lg:p-20 flex flex-col gap-12 bg-[#E6E7E6]">
        <div className="flex items-center flex-col gap-6 w-full px-6 pt-12 pb-4 lg:px-0 lg:py-0">
          <h2 className="font-medium text-center text-[32px] lg:text-[48px] text-[#8F7D5E]">
            Depoimentos de <br />
            vidas transformadas
          </h2>

          <Image
            src={separator}
            alt="Separador de página"
            className="hidden lg:block"
          />

          <Image
            src={separatorMobile}
            alt="Separador da página"
            className="lg:hidden"
          />
        </div>

        <div className="px-6">
          <CarouselBase />
        </div>
        <div className="px-6 pb-8 flex items-center">
          <Button className="w-full lg:max-w-[240px]">
            Agende seu horário
          </Button>
        </div>
      </div>
    </>
  )
}
