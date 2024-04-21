import starSvg from '@/assets/stars.svg'
import Image from 'next/image'
import aspas from '@/assets/aspasIcon.svg'

export type CardFeedbackProps = {
  starsNumber: number
  name: string
  message: string
}

export function CardFeedback({
  starsNumber,
  message,
  name,
}: CardFeedbackProps) {
  const starsCount = Array(starsNumber).fill(starSvg)
  return (
    <div className="w-full h-[320px] md:w-[360px] md:h-[360px] flex flex-col pt-10 px-8 gap-5 bg-[#F4F1F0] border border-[#D2CBBD] rounded-[8px]">
      <div className="flex gap-2">
        {starsCount.map((star, index) => {
          return <Image src={star} alt="Estrelinha" key={index} />
        })}
      </div>
      <div className="h-[194px] text-sm overflow-clip line-clamp-8">
        <span className=" text-[#7D7D7D]">{message}</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-semibold text-sm text-[#8F7D5E] line-clamp-1">
          {name}
        </span>
        <div>
          <Image src={aspas} alt="Icon de aspas" />
        </div>
      </div>
    </div>
  )
}
