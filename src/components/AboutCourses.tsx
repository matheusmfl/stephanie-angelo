import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

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
          src={
            'https://s3-alpha-sig.figma.com/img/5b40/34d5/5d2ba2e36c49578466bb9e90c8ab4cc2?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jROi-oNowcup7pXiYYtQUPlxNbCY9PbWnEFoNlkMm8q0yVMNJMZyqnT5cpSetN0bp62sS--7yrNlt-lLMpsMwFplWDvgEyV2yHI5DbYeYQVFJjn5oQ8DNED-N~q9~TqX5tj3DKR2r1WYWyFETeS55T0f9unTnRZ1a9OgJePEx3nmnsaB6jZVhqmFWalirFfa5yVUqgB9UpagRpzqg1E2I6V2nSFMGE~siJ7tLXOxCiZvPEqvLDk0qCRc7oSra8YcXT9oz~OhXE8CDoQhVAawf5iE1rLQpY1t1ZwQpFOGoeHcvr~BYt-wbY04AGQry6Vs6UIRdsK2-5240q3VvKa-pg__'
          }
          className="object-cover"
          alt="Sobre nossos cursos"
        />
      </div>
    </div>
  )
}
