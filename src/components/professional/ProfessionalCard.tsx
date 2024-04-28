import Image from 'next/image'
import Link from 'next/link'

interface ProfessionalCard {
  name: string
  bio: string
  slug: string
  urlImage: string
}

export function ProfessionalCard({
  bio,
  name,
  slug,
  urlImage,
}: ProfessionalCard) {
  return (
    <Link href={`/profissionais/${slug}`}>
      <div className="flex flex-col w-full  border rounded-sm border-[#D2CBBE]">
        <div className="py-6 px-3 flex flex-col gap-[10px]">
          <h3 className="text-2xl text-[#4D4D4D] font-semibold">{name}</h3>
          <span className="line-clamp-3 text-base text-[#7D7D7D] font-medium">
            {bio}
          </span>
        </div>
        <div className="h-[300px] w-full relative overflow-hidden border rounded-b-sm border-[#D2CBBE]">
          <Image src={urlImage} alt={name} fill className="object-cover" />
        </div>
      </div>
    </Link>
  )
}
