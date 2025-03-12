import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { Instagram, Mail, MessageCircleMore } from 'lucide-react'
import Link from 'next/link'
import {
  WhatsappNumbersEnum,
  createWhatsAppLink,
} from '@/utils/whatsappLinkGenerator'

export function Footer() {
  return (
    <footer className="flex flex-col bg-[#BAADA1] p-6 lg:px-[120px] lg:py-20">
      <div className="pb-10 border-b-[0.5px] border-opacity-50 border-[#4D4D4D] flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>

        <div className="flex flex-col gap-3 ">
          <span className="text-base text-[#4D4D4D] font-medium">Contato:</span>
          <Link
            className="flex gap-3 text-center hover:underline"
            href={createWhatsAppLink({
              phoneNumber: WhatsappNumbersEnum.CLINICA,
              message: 'Olá, vim pelo site! Gostaria de mais informações',
            })}
          >
            <MessageCircleMore className="text-[#4D4D4D] w-6 h-6" />
            (51) - 99871-7896
          </Link>

          <Link
            href={'https://www.instagram.com/dra.stephanieangelo/'}
            className="flex gap-3  text-center hover:underline"
          >
            <Instagram className="text-[#4D4D4D] w-6 h-6" />
            @dra.stephanieangelo
          </Link>

          <Link
            href={'mailto:contato@drastephanieangelo.com.br'}
            className="flex gap-3  text-center hover:underline"
          >
            <Mail className="text-[#4D4D4D] w-6 h-6" />
            contato@drastephanieangelo.com.br
          </Link>
        </div>
      </div>

      <div className="pt-8 flex flex-col gap-5 items-center justify-center">
        <span className={'text-sm font-normal text-[#4D4D4D]'}>
          &copy; 2024 Dra.Stephanie Angelo, todos os direitos reservados
        </span>

        <div className="flex flex-col items-center justify-center gap-2">
          <span className={'text-sm font-normal text-[#4D4D4D]'}>
            Clínica Dra Stéphanie Angelo LTDA
          </span>

          <span className={'text-sm font-normal text-[#4D4D4D]'}>
            CNPJ 42.005.433/0001-80
          </span>
        </div>
      </div>
    </footer>
  )
}
