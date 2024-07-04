import Image from 'next/image'
import textLogo from '@/assets/aboutStephanieTxt.svg'
import { Button } from './ui/button'
import stephaniePhoto from '../../public/aboutStephanie.webp'
import Link from 'next/link'

export function AboutStephanie() {
  return (
    <div
      id="about-stephanie"
      className="flex flex-col xl:grid xl:grid-cols-2  lg:h-[816px] overflow-hidden"
    >
      <div className="w-full h-full max-h-[800px]">
        <Image
          src={stephaniePhoto}
          width={720}
          height={816}
          placeholder="blur"
          alt="Doutora Stephanie Angelo"
          className="object-cover object-top w-full"
        />
      </div>
      <div className="bg-slate-100 flex items-center py-8 xl:py-0  w-full h-full">
        <div className="flex flex-col gap-6 xl:px-20 px-6 w-full  ">
          <Image src={textLogo} alt="" className="object-cover lg:w-full" />
          <span className="text-[18px] font-normal leading-[27px] text-[#4D4D4D]">
            Conheça a trajetória de vida e carreira profissional inspiradora da
            Dra. Stéphanie Angelo.
          </span>

          <Link href={'/stephanie-angelo'}>
            <Button>Leia mais sobre a Dra. Stéphanie Angelo</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
