import Image from 'next/image'
import marcaDagua from '@/assets/marcaDagua.svg'
import { listProfessional } from '../../../sanity/querys/professional/list'
import { ProfessionalCard } from '@/components/professional/ProfessionalCard'

import { urlForImage } from '../../../sanity/lib/image'

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
