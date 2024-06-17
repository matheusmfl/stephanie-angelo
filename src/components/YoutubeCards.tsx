import Image from 'next/image'
import Link from 'next/link'

interface YoutubeCardsProps {
  thumb: string
  title: string
  time: string
  url: string
}

export function YoutubeCards({ thumb, time, title, url }: YoutubeCardsProps) {
  return (
    <Link href={url}>
      <div className="flex flex-col max-w-[210px]">
        <div className="relative h-[118px] w-[210px] rounded-md overflow-hidden">
          <Image src={thumb} alt="Youtube thumbnail" className="z-10" fill />
          <div className="bg-black rounded-[4px] z-40 absolute bottom-2 right-4 px-2 flex items-center justify-center w-fit">
            <span className="text-xs  text-white font-medium">{time}</span>
          </div>
        </div>

        <div className="py-3 px-2">
          <span className="text-stone-700 text-sm font-medium leading-5">
            {title}
          </span>
        </div>
      </div>
    </Link>
  )
}
