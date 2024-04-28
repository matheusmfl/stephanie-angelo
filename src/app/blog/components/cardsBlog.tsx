import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'

export type CardsBlogProps = {
  createdAt: string
  title: string
  description: string
  slug: string
  imageUrl: string
}

export function CardsBlog({
  createdAt,
  description,
  slug,
  title,
  imageUrl,
}: CardsBlogProps) {
  const data = new Date(createdAt)
  const dataFormatada = format(data, "dd 'de' MMMM yyyy", { locale: ptBR })
  return (
    <article className="flex flex-col w-full rounded-sm overflow-hidden border border-[#D2CBBE]">
      <div className="flex flex-col gap-[10px] px-3 py-6 lg:p-10">
        <div className="bg-[#8F7D5E] rounded-[24px] w-fit px-3 py-1 text-sm font-semibold text-white">
          {dataFormatada}
        </div>

        <h3 className="text-[#4D4D4D] text-xl lg:text-2xl font-semibold line-clamp-2">
          {title}
        </h3>

        <div className="flex flex-col">
          <span className="text-[#4D4D4D] text-base font-normal line-clamp-4 lg:line-clamp-3 ">
            {description}
          </span>
          <Link href={`/blog/${slug}`}>
            <span className="underline text-black text-base font-medium ">
              Continue lendo
            </span>
          </Link>
        </div>
      </div>

      <div className="h-[300px] relative">
        <Image
          fill
          src={imageUrl}
          alt={title}
          className="object-cover object-center"
        />
      </div>
    </article>
  )
}
