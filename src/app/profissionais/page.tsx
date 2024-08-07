import Image from 'next/image'
import marcaDagua from '@/assets/marcaDagua.svg'
import { listProfessional } from '../../../sanity/querys/professional/list'
import { ProfessionalCard } from '@/components/professional/ProfessionalCard'

import { urlForImage } from '../../../sanity/lib/image'
import Link from 'next/link'
import aboutStephanie from '../../../public/aboutStephanie.webp'

import aboutProfissionais from '../../../public/teamIntroduction.jpeg'

export const revalidate = 60

export default async function Page() {
  const profissionais = await listProfessional()
  return (
    <main className="flex flex-col">
      <div className="relative h-[298px] md:h-[480px] w-full overflow-hidden">
        <Image
          src={aboutProfissionais}
          className="absolute lg:-translate-y-52"
          alt="nossos profissionais"
        />
      </div>
      <div className="px-6 py-16 lg:py-32 lg:px-20 bg-black relative overflow-hidden">
        <Image
          src={marcaDagua}
          width={500}
          height={500}
          className="absolute right-0 -top-4 w-full "
          alt="Marca dágua"
        />
        <h1 className="text-[#F4F1F0] text-2xl lg:text-[48px] font-medium text-center">
          Conheça conheça nossos profissionais
        </h1>
      </div>

      <div className="px-6 py-10 flex flex-col gap-5 lg:py-20 2xl:px-[10%] lg:px-20 lg:grid lg:grid-cols-2">
        <Link href={`/stephanie-angelo`}>
          <div className="flex flex-col w-full  border rounded-sm border-[#D2CBBE]">
            <div className="py-6 px-3 flex flex-col gap-[10px]">
              <h3 className="text-2xl text-[#4D4D4D] font-semibold">
                Dra. Stéphanie Angelo
              </h3>
              <span className="line-clamp-3 text-base text-[#7D7D7D] font-medium">
                Dra Stéphanie Angelo é biomédica, especialista em harmonização
                facial, com residência internacional na área e diretora da
                clínica que carrega seu nome. Ao longo destes anos, já elevou a
                autoestima de mais de 1000 pacientes e formou centenas de
                alunos, que hoje alcançam resultados excelentes empregando as
                técnicas da Dra. Por ser uma amante do estudo e do conhecimento,
                já realizou mais de 50 cursos nacionais e internacionais, todos
                voltados ao estudo da harmonização e anatomia facial, e, por
                isso, entrega resultados seguros e eficazes. Apaixonada por ver
                o brilho nos olhos dos pacientes que se sentem mais felizes com
                a melhoria em suas faces, tem o propósito de fazer com que seus
                pacientes gostem do que vêem no espelho e tenham autoconfiança.
                A dra é conhecida pelo carinho e dedicação que entrega em seus
                atendimentos.
              </span>
            </div>
            <div className="h-[300px] w-full relative overflow-hidden border rounded-b-sm border-[#D2CBBE]">
              <Image
                src={aboutStephanie}
                alt={'Doutora Stephanie'}
                fill
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>
        </Link>
        {profissionais &&
          profissionais.map((profissional) => {
            return (
              <ProfessionalCard
                key={profissional._id}
                bio={profissional.bio}
                name={profissional.name}
                slug={profissional.slug.current}
                urlImage={urlForImage(profissional.mainImage)}
              />
            )
          })}
      </div>
    </main>
  )
}
