import Image from 'next/image'
import marcaDagua from '@/assets/marcaDagua.svg'
import { listProfessional } from '../../../sanity/querys/professional/list'
import { ProfessionalCard } from '@/components/professional/ProfessionalCard'

import { urlForImage } from '../../../sanity/lib/image'
import Link from 'next/link'

export const revalidate = 60

export default async function Page() {
  const profissionais = await listProfessional()
  return (
    <main className="flex flex-col">
      <div className="px-6 py-16 lg:py-32 lg:px-20 bg-black relative overflow-hidden">
        <Image
          src={marcaDagua}
          width={500}
          height={500}
          className="absolute right-0 -top-4 w-full "
          alt="Marca dágua"
        />
        <h1 className="text-[#F4F1F0] text-2xl font-semibold text-center">
          Conheça a história de vida de nossos excelentes profissionais
        </h1>
      </div>

      <div className="px-6 py-10 flex flex-col gap-5 lg:py-20 lg:px-20 lg:grid lg:grid-cols-2">
        <Link href={`/stephanie-angelo`}>
          <div className="flex flex-col w-full max-w-[540px] border rounded-sm border-[#D2CBBE]">
            <div className="py-6 px-3 flex flex-col gap-[10px]">
              <h3 className="text-2xl text-[#4D4D4D] font-semibold">
                Dra. Stéphanie Angelo
              </h3>
              <span className="line-clamp-3 text-base text-[#7D7D7D] font-medium">
                Dra Stéphanie Angelo é biomédica, especialista em harmonização
                facial, com residência internacional na área e diretora da
                clínica que carrega seu nome. Ao longo destes anos, já elevou a
                autoestima de mais de 800 pacientes e formou centenas de alunos,
                que hoje alcançam resultados excelentes empregando as técnicas
                da Dra. Por ser uma amante do estudo e do conhecimento, já
                realizou mais de 50 cursos nacionais e internacionais, todos
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
                src={
                  'https://s3-alpha-sig.figma.com/img/b3f3/9219/7e2731ba0a64f67b6e50843278464108?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GBCnmG6XrlazYaLoRrwMOfpxEkfMv1A1sHcTwfpSOiA96J~4ePtSpG2zoJ2uiFS6Z23rS5Oc6ZTrv80sSgDAFXq-QWx4E8NoVScxpllyxLyB-q~bHqSuyG6vcazhkgnse22juRS~c-sRa6UGQZtLauhw3p3Y79kbIBzG~RNsrVhssOXpsUSz5j9YuiWSKnoSp5kvtFqhuyJtFNb-xuYjM~~IlTwbIxNbIAk3kajzkalf2NkeAnThRd53wE9~Vh7Cf8wfHLFsAJI9QS0MhIBdTPQwdm-1Rshg3HKFdEt4P8uFey3a0p6G5tPTmEnJ-u-6Yr44W~90v99hgygwt0~qwQ__'
                }
                alt={'Doutora Stephanie'}
                fill
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
