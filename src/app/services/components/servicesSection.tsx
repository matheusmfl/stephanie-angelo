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
      className={`flex ${isIndexOdd ? '' : 'flex-row-reverse'} overflow-x-hidden h-[600px] bg-[#F7F1E7]`}
    >
      <div className="relative w-full h-full">
        <Image src={imageUrl} fill alt="Clinic Img" className="object-cover" />
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <div className="px-20 flex flex-col gap-6">
          <h2 className="text-[#8F7D5E] text-[48px] leading-[58px] ">
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
