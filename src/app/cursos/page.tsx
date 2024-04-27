import Image from 'next/image'
import marcaDagua from '@/assets/marcaDagua.svg'
import { CardCurso, CardCursoProps } from './components/CardCurso'
import { CardFeedbackProps } from '@/components/CardFeedback'
import { CarouselBase } from '@/components/CarouselBase'
import separator from '@/assets/separator.svg'
import { FormContact } from '@/components/FormContact'

const CoursesArray: CardCursoProps[] = [
  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/3834/0a21/97230ec35dedb507b75f8509ae68d39f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lgI~OxH6Pm70i5X1Yx~CtJV-SYFRgh4I9SZri2gAys-RM1Me1T6fkRqCV4-ot-drvqh9fBXGEMURbqPjHLnUZsOz9TnBIc2TIvtaLcY1y68DbDFJ9DOlJ~UxgB~O7vsGRM8lYTc-6iIEr1F-vw7~hQCv99tmDDvpthH8X6acqAhYqtoK~mfcWtmoh93GNmzLhBk16H1zi4VH3cWByoJ5zpdsgN2twQCO6uNSm88KKVw7sdGIcDI54idOAyZ3KRtLc-8fobdoSzZtBleytmjJEz0YS7~U2xljQNciHrRd~YCRuJD7QgC8xWGcKzdeHDKoaAc8s95O8ouDF57WWiXVGQ__',
    title: 'FULLFACE®',
    description:
      'Aprimore suas habilidades em um curso completo sobre preenchimentos faciais com ácido hialurônico, projetado para impulsionar sua carreira na área da harmonização facial! Desfrute de dois dias intensivos de aprendizado em nosso Curso VIP, onde teoria e prática se combinam perfeitamente. Com no máximo 3 alunos por turma, garantimos atenção personalizada e um ambiente propício para o seu desenvolvimento profissional!',
  },

  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/4fca/bd8d/e152b5c25ad059f687802222acc9b103?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HRDEWiuOBUoK9jk6GJSEr8ahDJ0-y1Gwm6HVKhbGOc~OyW57~oAxdDeV1or6KywkLB94g-O5wSCIeyk5PTxnkMF8rd6Az~jFjaWQFqzAJ3-1JZRhRo4QBfC1iqB01ROXkXFV-X11tpZbusUGfVZ22rD58fNrRh7uClblRYwupdSvwOeqb1mufdIcXGNo6sGE89re-7Kev9XqYtUITrZPp9U2XLmFUpno037CYDV2u~XbNt~clG2Ag9njC2W5n1fFLcBsBkta8dVabnhJaomLYjf31Wnk-wUhtiPCrEnPVgxWC~AkgsoG6hIELnWaItYy2aWypeLLaJEFQP~EGvJXCQ__',
    title: 'FACEUP',
    description:
      'Harmonizar a face apenas com toxina botulínica e preenchedores ainda não é o suficiente para alcançar resultados de excelência em rejuvenescimento facial. Neste intensivo, durante 12 horas, abordaremos os mais importantes tópicos para tornar você um profissional de sucesso na harmonização facial, agregando ainda mais resultados com o uso dos bioestimuladores de colágeno na sua rotina clínica.',
  },

  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/c1be/d1e7/5350462f8ea84b44e51188512a219a19?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kZ6nzzWRQG4L1jquUXQskcUcGsp6p3a42Pf2plZ00UxKkbrdy796LxEvTwtBfVS2xZqC2N6-66lcmBoQ0ot1Hc714zVrwgEnzeWBMB2IvuPV9p7GZ2bnd-0jI2LA9YYgD49rQiMm2ksA87LErliIs-2ONRMF61fcJfDDU9I9EVPwiF93MIPKRd1ATZG9e9qydDEtyWWnajZPzp3Owc2ezCpVEJttMy1nzVY5KZDlPO9sDLkBZg-NfyZ1UVVUNtRUA8Wp3wSkHFgqO96vyhyNnk9r4nr11b1AGqtnWEDBIq~GohP3xUkqesQ1zUv9oQ0gc0G3a6Hg5GmO3~xFrrwvoQ__',
    title: 'PERFECT NOSE',
    description:
      'Se você ainda tem medo e insegurança em realizar rinomodelação, este é o curso para você. Uma das maiores especialidades da Dra Stéphanie é rinomodelação e nós estamos aqui para virar essa chave na sua carreira. Neste intensivo, durante 12 horas, abordaremos os mais importantes tópicos para tornar você um profissional de sucesso, tendo resultados de excelência e principalmente, com segurança.',
  },
]

const depoiments: CardFeedbackProps[] = [
  {
    starsNumber: 5,
    message:
      'Sempre tive medo de fazer procedimento estético no rosto...mas depois que conheci a Clínica e o trabalho da Dra Stéphanie, minha visão sobre procedimentos mudou completamente. Você já se sente especial na recepção. Ela tem um carinho,  respeito e o profissionalismo incrível com suas clientes.',
    name: 'Juliana Severo',
    dark: true,
  },

  {
    starsNumber: 5,
    message:
      'Foi a melhor decisão da minha vida. O meu único arrependimento é não ter feito antes. A experiência por completo é incrível, toda equipe é um amor, simpáticas e extremamente atenciosas. O procedimento transformou todas as áreas da minha vida. Eu recomendo 100%.',
    name: 'Isadora Quadros',
    dark: true,
  },
  {
    starsNumber: 5,
    message:
      'Atendimento impecável! Equipe super atenciosa! A Dra Stephanie que, além de  linda e querida, é extremamente competente. É uma profissional que passa tranquilidade e segurança no que faz. Simplesmente a melhor!!!',
    name: 'Dani Garcia',
    dark: true,
  },
  {
    starsNumber: 5,
    message:
      'Foi incrível, desde que a recepção nos atende na porta, nos mimos que recebemos enquanto esperamos, ambiente gostoso, e o atendimento da Dra Stefany chega como a cereja do bolo, que nos proporciona muitos momentos satisfatórios e o trabalho impecável. Meu marido e minhas duas filhas são clientes!',
    name: 'Andreia Canuto',
    dark: true,
  },
]

export default function Page() {
  return (
    <main className="flex flex-col">
      <div className="px-6 py-16 lg:py-20 lg:px-40 bg-black relative overflow-hidden">
        <Image
          src={marcaDagua}
          width={400}
          height={400}
          className="absolute w-[400px] -right-4 -top-2"
          alt="Marca dágua"
        />
        <div className="flex flex-col gap-6 lg:gap-8">
          <h1 className="text-[#F4F1F0] text-2xl lg:text-[40px] leading-10 text-left font-semibold ">
            Somos referência em cursos com centenas{' '}
            <br className="hidden lg:block" /> de alunos treinados executando
            nossas <br className="hidden lg:block" /> técnicas exclusivas
          </h1>

          <span className="text-lg lg:text-[20px] text-[#F4F1F0] font-medium ">
            Confira alguns dos nossos cursos
          </span>
        </div>
      </div>

      <section>
        <article className="py-10 px-6 lg:py-20 lg:px-20 flex flex-col items-center gap-5 lg:gap-10">
          {CoursesArray.map((course, index) => (
            <CardCurso
              description={course.description}
              imageUrl={course.imageUrl}
              title={course.title}
              key={index}
            />
          ))}
        </article>
        <div className="py-10 px-6 relative overflow-hidden  lg:py-20 lg:px-20 flex flex-col bg-[#1A1A1A] gap-5 lg:gap-10">
          <h2 className="text-center text-xl leading-10 lg:text-[48px] font-medium text-[#F7F1E7]">
            Profissionais transformados <br /> através dos nossos cursos
          </h2>
          <Image src={separator} alt="separator" />
          <Image
            src={marcaDagua}
            width={600}
            height={400}
            className="absolute  -right-4 -top-2"
            alt="Marca dágua"
          />

          <CarouselBase depoimentos={depoiments} />
        </div>
      </section>
      <FormContact />
    </main>
  )
}
