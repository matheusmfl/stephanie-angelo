import Image from 'next/image'

import { Button } from './ui/button'
import image from '../../public/teamIntroduction.jpeg'
import Link from 'next/link'

export function TeamIntroduction() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 bg-red-50">
      <div className="relative h-[440px] lg:h-[560px]">
        <Image
          src={image}
          fill
          loading="lazy"
          placeholder="blur"
          alt="Membros do nosso time"
          className="object-cover object-center lg:object-bottom"
        />
      </div>
      <div className="lg:px-20 px-6 py-12 lg:py-0 h-full flex flex-col justify-center gap-6">
        <h2 className="text-[32px] lg:text-[48px] font-medium leading-[40px] text-[#8F7D5E]">
          Prontos para te receber
        </h2>

        <span className="text-[18px] font-normal leading-[27px] text-[#4D4D4D]">
          Somos apaixonados por cuidar da saúde e bem-estar dos nossos
          pacientes. Estamos prontos para oferecer as melhores experiências de
          beleza e autocuidado.
        </span>

        <Link href={'/profissionais'}>
          <Button className="lg:max-w-[240px]">
            Conheça nossos profissionais
          </Button>
        </Link>
      </div>
    </div>
  )
}
