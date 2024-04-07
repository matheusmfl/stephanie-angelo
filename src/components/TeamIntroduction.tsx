import Image from 'next/image'
import teamMembers from '@/assets/team-introduction.jpeg'
import { Button } from './ui/button'

export function TeamIntroduction() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 bg-red-50">
      <div>
        <Image
          src={teamMembers}
          placeholder="blur"
          loading="lazy"
          alt="Membros do nosso time"
          className="object-cover object-center"
        />
      </div>
      <div className="lg:px-20 px-6 py-12 lg:py-0 h-full flex flex-col justify-center gap-6">
        <h2 className="text-[32px] lg:text-[48px] font-normal leading-[58px] text-[#8F7D5E]">
          Prontos para te receber
        </h2>

        <span className="text-[18px] font-normal leading-[27px] text-[#4D4D4D]">
          Somos apaixonados por cuidar da saúde e o bem-estar estamos prontos
          para oferecer as melhores experiências de beleza e autocuidado.
        </span>

        <Button className="lg:max-w-[240px]">
          Conheça nossos profissionais
        </Button>
      </div>
    </div>
  )
}
