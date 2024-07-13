import Image from 'next/image'
import marcaDagua from '@/assets/marcaDagua.svg'
import { CardCurso, CardCursoProps } from './components/CardCurso'
import { CardFeedbackProps } from '@/components/CardFeedback'
import { CarouselBase } from '@/components/CarouselBase'
import separator from '@/assets/separator.svg'
import { FormContact } from '@/components/FormContact'

import fullface from '../../../public/fullface.jpeg'
import faceup from '../../../public/faceUp.jpeg'
import perfectNose from '../../../public/perfectNose.jpeg'

const CoursesArray: CardCursoProps[] = [
  {
    imageUrl: fullface,
    title: 'FULLFACE®',
    description:
      'Aprimore suas habilidades em um curso completo sobre preenchimentos faciais com ácido hialurônico, projetado para impulsionar sua carreira na área da harmonização facial! Desfrute de dois dias intensivos de aprendizado em nosso Curso VIP, onde teoria e prática se combinam perfeitamente. Com no máximo 3 alunos por turma, garantimos atenção personalizada e um ambiente propício para o seu desenvolvimento profissional!',
  },

  {
    imageUrl: faceup,
    title: 'FACEUP®',
    description:
      'Harmonizar a face apenas com toxina botulínica e preenchedores ainda não é o suficiente para alcançar resultados de excelência em rejuvenescimento facial. Neste intensivo, durante 12 horas, abordaremos os mais importantes tópicos para tornar você um profissional de sucesso na harmonização facial, agregando ainda mais resultados com o uso dos bioestimuladores de colágeno na sua rotina clínica.',
  },

  {
    imageUrl: perfectNose,
    title: 'PERFECT NOSE®',
    description:
      'Se você ainda tem medo e insegurança em realizar rinomodelação, este é o curso para você. Uma das maiores especialidades da Dra Stéphanie é rinomodelação e nós estamos aqui para virar essa chave na sua carreira. Neste intensivo, durante 12 horas, abordaremos os mais importantes tópicos para tornar você um profissional de sucesso, tendo resultados de excelência e principalmente, com segurança.',
  },
]

const depoiments: CardFeedbackProps[] = [
  {
    starsNumber: 5,
    message:
      'Oie! Quero te agradecer melhor, pq sou envergonhada, né. 🤣 Sensacional o teu curso, obrigada por nos passar teu conhecimento, por transferir tantas informações mega importantes, por passar confiança e, NOSSA, tu foi e é muito incrível, como profissional e pessoa, só tenho coisas boas para falar de ti.Adorei te conhecer e aprender muito contigo, mesmo! Mais uma vez, tu é incrível e linda né!! Obrigada por esse final de semana intenso de aprendizado🥰❤️',
    name: 'Dra Lauren Machado',
    dark: true,
  },

  {
    starsNumber: 5,
    message:
      'Cheguei em casa e vinha pensando na estrada o privilégio que tivemos ao nos deparáramos com essa profissional. Eu Entrei uma ontem e saí outra Daiane daí, mais confiante sem medo, pronta para te honrar @Clínica Dra Stéphanie Angelo Obrigada por TUDOOO',
    name: 'Dra Daiane Magalhães',
    dark: true,
  },
  {
    starsNumber: 5,
    message:
      'Foi intenso, foi desafiador foi transformador: realmente prof @dra.stephanieangelo não saímos os mesmos! São dois dias que parecem uma semana! MAs aprendemos com êxito, entendemos a técnica, praticamos, vencemos nossos medos e inseguranças, aprendemos o que é estética de verdade, com uma profissional incrível, que faz o que ama e ensina com amor! Obrigada por nos inspirar diariamente e esse curso superou nossas expectativas! Tu és uma profissional maravilhosa e um ser humano com um coração gigante! Tenho orgulho da profissional que te tornaste!obrigada Grzi, Maitê e Manu por todo o suporte e apoio! E obrigada aos meus já amigos @leonardo.bckr e @luizadalmoro.biomedica esse curso foi tão incrível pq vocês também estavam lá! Obrigada pela parceria e amizade que iniciamos nestes dois dias, adorei conhecer vocês! Enfim, não tenho palavras para descrever a minha felicidade! É apenas o começo! ✨💚',
    name: 'Dra Carolina Wallauer',
    dark: true,
  },
  {
    starsNumber: 5,
    message:
      '@Dra Stéphanie Angelo Muito obrigada por mais um curso maravilhoso teu, com certeza eu vou voltar mais vezes, como te digo teus cursos são um divisor de águas pois a segurança que tu passa para a gente consegui aplicar é surreal, muito obrigada! 💖💖',
    name: 'Dra Ana Paula Giacomini',
    dark: true,
  },
  {
    starsNumber: 5,
    message: 'Entrei aí uma profissional e sí outra. Sou muito grata! Sério!',
    name: 'Dra Djulian Muller',
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

          <CarouselBase depoimentos={depoiments} isCourses={true} />
        </div>
      </section>
      <FormContact />
    </main>
  )
}
