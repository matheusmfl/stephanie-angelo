import Image from 'next/image'
import stephanie from '@/assets/bg-clinic-location.jpeg'

export function ClinicLocation() {
  return (
    <div className="grid grid-cols-2 h-full overflow-hidden">
      <div className="bg-slate-100 flex items-center  w-full h-full ">
        <div className="flex flex-col gap-6 px-20">
          <h2 className="text-[48px] font-normal leading-[58px] text-[#4D4D4D]">
            Localização privilegiada
          </h2>
          <span className="text-[18px] font-normal leading-[27px] text-[#4D4D4D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </span>

          <button className="text-base leading-[24px] font-medium border border-[#BAB09B] rounded-sm text-[#F7F1E7] bg-button h-full w-full py-3 px-12 ">
            Agende seu horário
          </button>
        </div>
      </div>

      <div className="w-full h-full">
        <Image
          src={stephanie}
          width={720}
          height={1000}
          alt="Doutora Stephanie Angelo"
          className="object-cover object-top w-full"
        />
      </div>
    </div>
  )
}
