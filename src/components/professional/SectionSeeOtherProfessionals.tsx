import Link from 'next/link'
import { listProfessional } from '../../../sanity/querys/professional/list'
import { ProfessionalCard } from './ProfessionalCard'
import { urlForImage } from '../../../sanity/lib/image'

export default async function SectionSeeOtherProfessionals() {
  const profissionais = await listProfessional()
  console.log(profissionais)
  return (
    <section className="flex flex-col w-full px-6 py-10 lg:py-20 gap-10 lg:px-10 ">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <h2 className="text-[24px] lg:text-[32px] text-[#4D4D4D] font-semibold">
          Conheça também a história da nossa equipe
        </h2>
        <Link href={'/profissionais'}>
          <span className="underline text-[#8F7D5E] hover:text-[#8F7D5E]/90 text-[20px]">
            Todos os profissionais
          </span>
        </Link>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2">
        {profissionais &&
          profissionais.map((profissional, index) => {
            if (index >= 2) {
              return null
            }
            return (
              <ProfessionalCard
                bio={profissional.bio}
                name={profissional.name}
                slug={profissional.slug.current}
                urlImage={urlForImage(profissional.mainImage)}
                key={index}
              />
            )
          })}
      </div>
    </section>
  )
}
