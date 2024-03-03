import Image from 'next/image'
import logo from '@/assets/logo.svg'

export function Footer() {
  return (
    <footer className="flex flex-col gap-8 px-20 py-10 bg-footer">
      <div className="flex items-center justify-center">
        <Image src={logo} alt="Logo" />
      </div>
      <div className="grid grid-cols-2 justify-between space-x-16">
        <div className="flex-1 flex flex-col gap-6 ">
          <div className="flex flex-col ">
            <span className="font-semibold text-sm text-[#4D4D4D]">
              Endereço:
            </span>
            <span className="font-normal text-sm text-[#4D4D4D]">
              Av. José Loureiro da Silva, 2025 - sala 1201 Centro, Gravataí - RS
            </span>
          </div>
          <div className="flex flex-col ">
            <span className="font-semibold text-sm text-[#4D4D4D]">
              Contato:
            </span>
            <span className="font-normal text-sm text-[#4D4D4D]">
              xx-xxxx-xxxx
            </span>
            <span className="font-normal text-sm text-[#4D4D4D]">
              xx-xxxx-xxxx
            </span>
          </div>
          <div className="flex gap-3 ">
            <span className="font-semibold text-sm text-[#4D4D4D]">Insta</span>
            <span className="font-normal text-sm text-[#4D4D4D]">Face</span>
            <span className="font-normal text-sm text-[#4D4D4D]">Twitter</span>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <span>Link x</span>
          <span>Link x</span>
          <span>Link x</span>
          <span>Link x</span>
          <span>Link x</span>
          <span>Link x</span>
          <span>Link x</span>
          <span>Link x</span>
          <span>Link x</span>
          <span>Link x</span>
          <span>Link x</span>
          <span>Link x</span>
          <span>Link x</span>
          <span>Link x</span>
          <span>Link x</span>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <span>© 2024 Relume. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <span>Privacy policy</span>
          <span>Privacy policy</span>
          <span>Privacy policy</span>
        </div>
      </div>
    </footer>
  )
}
