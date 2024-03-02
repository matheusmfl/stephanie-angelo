import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { NavigationMenuHeader } from './NavigationMenuHeader'

export function Header() {
  return (
    <header className="flex gap-8 py-5 px-20 bg-[#F4F1F0] w-screen">
      <div>
        <Image src={logo} alt="Logotipo" />
      </div>

      <NavigationMenuHeader />

      <div className="flex items-center justify-center">
        <button className="text-base leading-[24px] font-medium border border-[#BAB09B] rounded-sm text-[#F7F1E7] bg-button h-full w-full py-3 px-12 ">
          Agende seu horário
        </button>
      </div>
    </header>
  )
}
