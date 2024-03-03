import Image from 'next/image'
import separator from '@/assets/separator.svg'
import depoimento01 from '@/assets/depoimento01.jpeg'
import depoimento02 from '@/assets/depoimento02.jpeg'
import depoimento03 from '@/assets/depoimento03.jpeg'
import depoimento04 from '@/assets/depoimento04.jpeg'
import depoimento05 from '@/assets/depoimento05.jpeg'
import depoimento06 from '@/assets/depoimento06.jpeg'
import depoimento07 from '@/assets/depoimento07.jpeg'
import depoimento08 from '@/assets/depoimento08.jpeg'

export function Depoiments() {
  return (
    <div className="p-20 flex flex-col gap-12 bg-[#E8E5E1]">
      <div className="flex items-center flex-col gap-6 w-full">
        <h2 className="font-normal text-center text-[48px] text-[#8F7D5E]">
          Tratamentos da clínica
        </h2>

        <Image src={separator} alt="Separador de página" />
      </div>

      <div className="grid grid-cols-3 space-x-5 space-y-5">
        <div className="flex flex-col gap-5">
          <Image
            src={depoimento01}
            className="rounded-md shadow-md"
            alt="Depoimento"
          />
          <Image
            src={depoimento04}
            className="rounded-md shadow-md"
            alt="Depoimento"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Image
            src={depoimento02}
            className="rounded-md shadow-md"
            alt="Depoimento"
          />
          <Image
            src={depoimento05}
            className="rounded-md shadow-md"
            alt="Depoimento"
          />
        </div>

        <div className="flex flex-col gap-5">
          <Image
            src={depoimento03}
            className="rounded-md shadow-md"
            alt="Depoimento"
          />
          <div className="flex flex-col gap-5">
            <Image
              src={depoimento06}
              className="rounded-md shadow-md"
              alt="Depoimento"
            />
            <Image
              src={depoimento07}
              className="rounded-md shadow-md"
              alt="Depoimento"
            />
            <Image
              src={depoimento08}
              className="rounded-md shadow-md"
              alt="Depoimento"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
