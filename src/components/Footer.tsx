import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { Instagram, Mail, MessageCircleMore } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex flex-col bg-[#BAADA1] p-6 lg:px-[120px] lg:py-20">
      <div className="pb-10 border-b-[0.5px] border-opacity-50 border-[#4D4D4D] flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>

        <div className="flex gap-3 ">
          <span className="text-base text-[#4D4D4D] font-medium">Contato:</span>
          <Link href={'/'}>
            <MessageCircleMore className="text-[#4D4D4D] w-6 h-6" />
          </Link>

          <Link href={'/'}>
            <Instagram className="text-[#4D4D4D] w-6 h-6" />
          </Link>

          <Link href={'/'}>
            <Mail className="text-[#4D4D4D] w-6 h-6" />
          </Link>
        </div>
      </div>

      <div className="pt-8 flex items-center justify-center">
        <span className={'text-sm font-normal text-[#4D4D4D]'}>
          &copy; 2024 Dra.Stephanie Angelo, todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}
