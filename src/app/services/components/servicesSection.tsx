import { Button } from '@/components/ui/button'

import Image from 'next/image'

export interface ServicesProps {
  index: number
  imageUrl: string
  title: string
  description: string
}

export function ServicesSection({
  index,
  imageUrl,
  title,
  description,
}: ServicesProps) {
  const isIndexOdd = index % 2 !== 0

  return (
    <section
      className={`flex ${isIndexOdd ? '' : 'lg:flex-row-reverse'} flex-col lg:flex-row overflow-x-hidden lg:h-[600px] h-full bg-[#F7F1E7]`}
    >
      <div className="relative w-full h-full min-h-[400px]">
        <Image
          src={imageUrl}
          loading={index !== 1 ? 'lazy' : 'eager'}
          fill
          alt="Clinic Img"
          className="object-cover"
          priority={index === 1}
        />
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <div className="lg:px-20 w-full h-full px-6 py-11 lg:py-0 flex flex-col gap-6 lg:justify-center">
          <h2 className="text-[#8F7D5E] text-[32px] lg:text-[48px] leading-[58px] ">
            {title}
          </h2>

          <span className="text-[18px] leading-[27px] text-justify text-[#4D4D4D]">
            {description}
          </span>

          <Button>Agende seu horário</Button>
        </div>
      </div>
    </section>
  )
}
