import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import bgCourse from '../../public/aboutCourse.jpeg'

export function AboutCourses() {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 bg-slate-50">
      <div className="lg:px-20 px-6 py-12 lg:py-0 h-full flex flex-col justify-center gap-6">
        <h2 className="text-[32px] lg:text-[48px] font-medium leading-[58px] text-[#8F7D5E]">
          Nossos cursos
        </h2>

        <span className="text-[18px] font-normal leading-[27px] text-[#4D4D4D]">
          Somos referência em cursos com centenas de alunos treinados executando
          nossas técnicas exclusivas!
        </span>
        <Link href={'/cursos'}>
          <Button className="md:w-fit px-12">
            Saiba mais sobre <br className="md:hidden" /> o cronograma e ementas
          </Button>
        </Link>
      </div>
      <div className="relative h-[450px] lg:h-[720px]">
        <Image
          fill={true}
          src={bgCourse}
          placeholder="blur"
          className="object-cover"
          alt="Sobre nossos cursos"
        />
      </div>
    </div>
  )
}
