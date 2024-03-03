import hero from '@/assets/stephanie-bg-hero.webp'
import Image from 'next/image'

export function Hero() {
  return (
    <>
      <main className="relative h-[304px] md:h-[680px] flex flex-col justify-center md:px-20  ">
        <Image src={hero} alt="bg" fill={true} className="-z-10 object-cover" />
        <div className="hidden rounded-[8px] shadow-default px-8 py-10 md:flex flex-col gap-6 w-[530px] bg-[#F4F1F0C4]">
          <h2 className="font-medium text-[40px] leading-[48px] text-[#4D4D4D]">
            Medium length hero headline goes here
          </h2>

          <p className="text-[#4D4D4D] text-[20px] leading-[30px] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus.
          </p>

          <button className="text-base leading-[24px] h-[48px] max-w-[280px] font-medium border border-[#BAB09B] rounded-sm text-[#F7F1E7] bg-button w-full py-3 px-12 ">
            Agende seu horário
          </button>
        </div>
      </main>
      {/* Responsive */}
      <div className="md:hidden rounded-[8px] shadow-default px-6 py-12 flex flex-col gap-6  bg-[#f4f1f0cc]">
        <h2 className="font-medium text-[24px] text-center text-[#4D4D4D]">
          Medium length hero headline goes here
        </h2>

        <p className="text-[#4D4D4D] text-[20px] leading-[30px] font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus.
        </p>

        <button className="text-base leading-[24px] h-[48px] font-medium border border-[#BAB09B] rounded-sm text-[#F7F1E7] bg-button w-full py-3 px-12 ">
          Agende seu horário
        </button>
      </div>
    </>
  )
}
