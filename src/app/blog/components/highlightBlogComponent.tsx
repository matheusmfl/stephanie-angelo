'use client'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export type HighlightBlogComponent = {
  imageUrl: string
  createdAt: string
  title: string
  description: string
  slug: string
}

export function HighlightBlogComponent({
  createdAt,
  description,
  imageUrl,
  title,
  slug,
}: HighlightBlogComponent) {
  const data = new Date(createdAt)
  const dataFormatada = format(data, "dd 'de' MMMM yyyy", { locale: ptBR })
  return (
    <article className="flex shadow-md flex-col w-full">
      <div className="relative h-[315px] lg:h-[580px] w-full">
        <Image
          fill
          src={imageUrl}
          alt={title}
          className="object-cover object-center"
        />
      </div>
      <div className="p-6 lg:py-[48px] lg:px-[56px] bg-[#1A1A1A] flex flex-col gap-4 lg:gap-6">
        <div className="flex h-fit lg:flex-col w-full gap-6">
          <div className="bg-[#8F7D5E] rounded-[24px] w-fit px-3 py-1 text-sm font-semibold text-white">
            Destaques
          </div>
          <span className="text-base text-[#F4F1F0] font-medium">
            {dataFormatada}
          </span>
        </div>

        <h2 className="text-[#F4F1F0] text-xl font-semibold leading-8 lg:text-4xl lg:leading-10">
          {title}
        </h2>

        <div className="flex flex-col">
          <span className="text-[#7D7D7D] text-base font-medium leading-6 line-clamp-6 lg:line-clamp-2">
            {description}
          </span>
          <Link href={`/blog/${slug}`}>
            <span className="underline text-white text-base font-medium ">
              Continue lendo
            </span>
          </Link>
        </div>
      </div>
    </article>
  )
}
