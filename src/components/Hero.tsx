'use client'
import image1 from '@/assets/stephanie-bg-hero.webp'
import image2 from '@/assets/hero-02.jpg'
import image3 from '@/assets/hero-03.jpg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import {
  WhatsappNumbersEnum,
  createWhatsAppLink,
} from '@/utils/whatsappLinkGenerator'

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [image1, image2, image3]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (previousIndex) => (previousIndex + 1) % images.length,
      )
    }, 3000) // Altera a imagem a cada 3 segundos

    return () => clearInterval(timer) // Limpa o intervalo quando o componente é desmontado
  }, [])
  return (
    <>
      <main className="relative h-[304px] md:h-[680px] flex flex-col justify-center md:px-20  ">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="bg"
            placeholder="blur"
            fill={true}
            className={`absolute object-cover -z-50 inset-0 transition-opacity duration-1000 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="hidden rounded-[8px] shadow-default px-8 py-10 md:flex flex-col gap-6 w-[530px] bg-[#F4F1F0C4]">
          <h2 className="font-semibold text-[40px] leading-[48px] text-[#8F7D5E]">
            Bem-estar e beleza em perfeita sintonia
          </h2>

          <p className="text-[#4D4D4D] text-[20px] leading-[30px] font-medium">
            Acreditamos que a beleza verdadeira nasce do equilíbrio entre o
            bem-estar físico e mental. Descubra nossa ampla gama de serviços
            personalizados para promover sua melhor versão.
          </p>

          <Link
            href={createWhatsAppLink({
              message:
                'Olá, vim pelo site! Gostaria de agendar um horário para atendimento.',
              phoneNumber: WhatsappNumbersEnum.CLINICA,
            })}
          >
            <Button>Agende seu horário</Button>
          </Link>
        </div>
      </main>
      {/* Responsive */}
      <div className="md:hidden rounded-[8px] shadow-default px-6 py-12 flex flex-col gap-6  bg-[#f4f1f0cc]">
        <h2 className="font-medium text-[24px] text-center text-[#8F7D5E]">
          Bem-estar e beleza em perfeita sintonia
        </h2>

        <p className="text-[#4D4D4D] text-[20px] leading-[30px] font-medium">
          Acreditamos que a beleza verdadeira nasce do equilíbrio entre o
          bem-estar físico e mental. Descubra nossa ampla gama de serviços
          personalizados para promover sua melhor versão
        </p>

        <Button>Agende seu horário</Button>
      </div>
    </>
  )
}
