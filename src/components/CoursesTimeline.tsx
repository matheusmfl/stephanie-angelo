import Image from 'next/image'
import marcaDagua from '@/assets/marcaDagua.svg'
import { Button } from './ui/button'

export function CoursesTimeline() {
  return (
    <div className="h-fit overflow-hidden relative flex flex-col gap-5 w-full py-12 px-6 md:px-20 md:py-20 bg-[#1A1A1A]">
      <h1 className="text-3xl text-[#E2DBCC] font-medium leading-8 ">
        CONFIRA NOSSO <br className="hidden md:block" /> CRONOGRAMA DE CURSOS
      </h1>

      <span className="text-[#F4F1F0] leading-6 font-normal text-xl">
        Clique no botão abaixo e fique por dentro da{' '}
        <br className="hidden md:block" />
        data dos próximos cursos e mentorias.
      </span>

      <Button className="bg-[#F4F1F0] z-20 md:w-fit hover:bg-[#F4F1F0]/90 text-[#4D4D4D]">
        Conferir cronograma
      </Button>
      <Image
        src={marcaDagua}
        fill
        className="right-20 md:hidden"
        alt="Marca Dagua"
      />

      <Image
        src={marcaDagua}
        className="hidden md:absolute md:block md:h-[620px] md:w-[620px] md:-right-5 md:top-3"
        alt="Marca Dagua"
      />
    </div>
  )
}
