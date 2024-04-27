import { Button } from '@/components/ui/button'
import {
  WhatsappNumbersEnum,
  createWhatsAppLink,
} from '@/utils/whatsappLinkGenerator'
import Image from 'next/image'

export type CardCursoProps = {
  imageUrl: string
  title: string
  description: string
}

export function CardCurso({ description, imageUrl, title }: CardCursoProps) {
  return (
    <div className="max-w-[1080px] flex flex-col shadow-sm">
      <div className="w-full h-[180px] lg:h-[560px] relative">
        <Image src={imageUrl} fill alt="Confira nosso intensivo" />
      </div>
      <div className="border-b border-l border-r border-[#D6D0C8] py-6 px-4 lg:p-10 flex flex-col gap-5 lg:gap-6">
        <h2 className="text-[#8F7D5E] text-2xl lg:text-3xl font-semibold">
          {title}
        </h2>

        <span className="text-base text-[#7D7D7D] lg:text-justify font-medium ">
          {description}
        </span>

        <a
          href={createWhatsAppLink({
            message: `Olá, vim pelo site! Gostaria de mais informações sobre o intensivo ${title}.`,
            phoneNumber: WhatsappNumbersEnum.CURSOS,
          })}
        >
          <Button>Ver cronograma e ementas</Button>
        </a>
      </div>
    </div>
  )
}
