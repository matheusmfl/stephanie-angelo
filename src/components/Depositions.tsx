'use client'
import Image from 'next/image'
import separator from '@/assets/separator.svg'
import separatorMobile from '@/assets/mobileSeparator.svg'

import { Button } from './ui/button'
import { CarouselBase } from './CarouselBase'
import { CardFeedbackProps } from './CardFeedback'

const depoiments: CardFeedbackProps[] = [
  {
    starsNumber: 5,
    message:
      'Sempre tive medo de fazer procedimento estético no rosto...mas depois que conheci a Clínica e o trabalho da Dra Stéphanie, minha visão sobre procedimentos mudou completamente. Você já se sente especial na recepção. Ela tem um carinho,  respeito e o profissionalismo incrível com suas clientes.',
    name: 'Juliana Severo',
  },

  {
    starsNumber: 5,
    message:
      'Foi a melhor decisão da minha vida. O meu único arrependimento é não ter feito antes. A experiência por completo é incrível, toda equipe é um amor, simpáticas e extremamente atenciosas. O procedimento transformou todas as áreas da minha vida. Eu recomendo 100%.',
    name: 'Isadora Quadros',
  },
  {
    starsNumber: 5,
    message:
      'Atendimento impecável! Equipe super atenciosa! A Dra Stephanie que, além de  linda e querida, é extremamente competente. É uma profissional que passa tranquilidade e segurança no que faz. Simplesmente a melhor!!!',
    name: 'Dani Garcia',
  },
  {
    starsNumber: 5,
    message:
      'Foi incrível, desde que a recepção nos atende na porta, nos mimos que recebemos enquanto esperamos, ambiente gostoso, e o atendimento da Dra Stefany chega como a cereja do bolo, que nos proporciona muitos momentos satisfatórios e o trabalho impecável. Meu marido e minhas duas filhas são clientes!',
    name: 'Andreia Canuto',
  },
]

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
          <CarouselBase depoimentos={depoiments} />
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
