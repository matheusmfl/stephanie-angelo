import Image, { StaticImageData } from 'next/image'
import separator from '@/assets/separator.svg'
import mobileSeparator from '@/assets/mobileSeparator.svg'
import card01Img from '@/assets/card01.webp'
import card02Img from '@/assets/card02.webp'
import card03Img from '@/assets/card03.webp'
import card04Img from '@/assets/card04.webp'
import card05Img from '@/assets/card05.webp'
import asset from '@/assets/clinicSpecializationAsset.svg'

interface ICardsProps {
  type: 'card01' | 'card02' | 'card03' | 'card04' | 'card05'
  title: string
  subtitle: string
}

const iconMap: Record<ICardsProps['type'], StaticImageData> = {
  card01: card01Img,
  card02: card02Img,
  card03: card03Img,
  card04: card04Img,
  card05: card05Img,
}
const CardComponent = ({ title, subtitle, type }: ICardsProps) => {
  return (
    <div className="flex flex-col gap-8 items-center md:w-[326px]">
      <Image
        src={iconMap[type]}
        alt="Card"
        width={340}
        height={340}
        className="object-cover rounded-full w-[240px] h-[240px] shadow-md"
      />

      <div className="flex flex-col gap-6 w-full">
        <h3 className="text-center text-2xl font-semibold text-[#4D4D4D] ">
          {title}
        </h3>
        <span className="text-center text-base font-medium text-[#4D4D4D] ">
          {subtitle}
        </span>
      </div>
    </div>
  )
}

export function ClinicSpecializations() {
  return (
    <>
      <section className="flex relative flex-col xl:p-20 py-10 px-6 gap-12 z-10 bg-clinic-specialization overflow-hidden  ">
        <Image
          src={asset}
          alt="Img static"
          fill={true}
          className="-z-30 overflow-visible h-full w-full object-cover  xl:-translate-20 xl:-bottom-20"
        />
        <div className="flex items-center z-50 flex-col gap-6 w-full">
          <h2 className="font-normal text-center text-[32px] xl:text-[48px] text-[#8F7D5E]">
            Tratamentos da clínica
          </h2>

          <Image
            src={separator}
            className="xl:w-full z-20 object-cover hidden xl:block"
            alt="Separador de página"
          />

          <Image
            src={mobileSeparator}
            className="xl:w-full  object-cover  xl:hidden"
            alt="Separador de página"
          />
        </div>

        <div className="flex flex-row flex-wrap gap-20 items-center justify-center z-20 relative">
          <CardComponent
            title="Harmonização facial"
            subtitle="Conjunto de procedimentos, com técnicas exclusivas nossas, que equilibram os elementos da face, tratando imperfeições como linhas de expressão, trazendo beleza e rejuvenescimento"
            type="card01"
          />

          <CardComponent
            title="Harmonização corporal"
            subtitle="Técnicas exclusivas da clínica que visam remodelar seu corpo, eliminar gorduras localizadas, tratar flacidez corporal, aumentar o tônus muscular, tratar estrias e imperfeições com resultados eficazes"
            type="card02"
          />

          <CardComponent
            title="Massoterapia"
            subtitle="Ganhe qualidade de vida promovendo seu bem-estar físico e mental com massagens relaxantes e melhora no contorno corporal com técnicas exclusivas de massagens modeladoras e drenagens linfáticas"
            type="card03"
          />

          <CardComponent
            title="Jetbronze"
            subtitle="O Jetbronze é um método seguro e eficaz de bronzeamento artificial que não causa danos à pele"
            type="card04"
          />

          <CardComponent
            title="Limpeza de pele"
            subtitle="Elimine impurezas, renove a sua pele e desfrute da maciez e saúde que ela merece"
            type="card05"
          />
        </div>
      </section>
    </>
  )
}
