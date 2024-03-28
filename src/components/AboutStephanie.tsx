import Image from 'next/image'
import stephanie from '@/assets/stephanie.jpeg'
import textLogo from '@/assets/aboutStephanieTxt.svg'

export function AboutStephanie() {
  return (
    <div className="flex flex-col xl:grid xl:grid-cols-2  lg:h-[816px] overflow-hidden">
      <div className="w-full h-full max-h-[800px]">
        <Image
          src={stephanie}
          width={720}
          height={816}
          alt="Doutora Stephanie Angelo"
          className="object-cover object-top w-full"
        />
      </div>
      <div className="bg-slate-100 flex items-center py-8 xl:py-0  w-full h-full">
        <div className="flex flex-col gap-6 xl:px-20 px-6  ">
          <Image src={textLogo} alt="" />
          <span className="text-[18px] font-normal leading-[27px] text-[#4D4D4D]">
            Conheça a trajetória de vida e carreira profissional inspiradora da
            Dra. Stéphanie Angelo.
          </span>

          <button className="text-sm lg:max-w-[423px] tracking-tighter lg:text-base leading-[24px] font-medium border border-[#BAB09B] rounded-sm text-[#F7F1E7] bg-[#4D4D4D] h-full w-full py-3 px-5 lg:px-12 ">
            Leia mais sobre a Dra. Stéfanie Angelo
          </button>
        </div>
      </div>
    </div>
  )
}
