import Image from 'next/image'
import stephanie from '@/assets/bg-clinic-location.jpeg'
import { MapPin } from 'lucide-react'
import { Button } from './ui/button'

export function ClinicLocation() {
  return (
    <div className="xl:grid xl:grid-cols-2 flex flex-col-reverse h-full overflow-hidden">
      <div className="bg-slate-100 flex items-center  w-full h-full py-12 lg:py-0 px-6 lg:px-0 ">
        <div className="flex flex-col gap-6 lg:px-20">
          <h2 className="text-[48px] font-normal leading-[58px] text-[#8F7D5E]">
            Localização privilegiada
          </h2>
          <span className="text-[18px] font-normal leading-[27px] text-[#4D4D4D]">
            Localização estratégica para sua comodidade e conforto. Clique no
            botão abaixo e descubra a melhor trajeto para nossa clínica.
          </span>

          <Button>Agende seu horário</Button>
        </div>
      </div>

      <div className="w-full h-[800px] relative p-10 flex items-end justify-center">
        <Image
          src={stephanie}
          fill
          alt="Doutora Stephanie Angelo"
          className="object-cover object-top w-full -z-10"
        />

        <div className="z-50 flex items-center cursor-pointer gap-6">
          <MapPin size={100} color="#FFF" />
          <div className="flex flex-col w-full gap-2 flex-1">
            <span className="text-5xl font-bold text-white">GOLDEN TOWER</span>
            <span className="text-2xl font-medium text-white">
              Av. José Loureiro da Silva, 2025 - sala 1201 Centro, Gravataí - RS
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
