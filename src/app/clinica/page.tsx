import { Button } from '@/components/ui/button'
import {
  WhatsappNumbersEnum,
  createWhatsAppLink,
} from '@/utils/whatsappLinkGenerator'
import Image from 'next/image'
import Link from 'next/link'

import hero from '../../../public/heroClinica.jpeg'
import clinic1 from '../../../public/clinica1.jpeg'
import clinic2 from '../../../public/clinica2.jpeg'
import clinic3 from '../../../public/clinica3.jpeg'

const values = [
  'Encantamento: Encantar você em cada etapa da sua jornada é a nossa prioridade.',
  'Amor: Acreditamos no poder transformador do amor próprio e da autoaceitação.',
  'Cuidado: Cuidamos de você com carinho, ética e profissionalismo, desde a primeira consulta até o acompanhamento pós-procedimento.',
  'Elegância: A elegância permeia tudo o que fazemos, desde a estética da nossa clínica até a forma como tratamos cada paciente.',
  'Entusiasmo: Somos apaixonados por estética e pela transformação positiva que podemos proporcionar na vida das pessoas.',
  'Ética: A ética é a base de tudo o que fazemos, garantindo a segurança e a qualidade dos nossos procedimentos.',
  'Qualidade: Buscamos a excelência em tudo o que fazemos, desde os produtos utilizados até a tecnologia empregada nos nossos procedimentos.',
  'Confiança: Acreditamos que a confiança é fundamental para uma relação médico-paciente sólida e duradoura.',
]

export default function Page() {
  return (
    <main className="flex flex-col">
      <div className="w-full relative h-[240px] lg:h-[640px]">
        <Image src={hero} fill alt="Foto da clínica" />
      </div>
      <div className="lg:py-20 lg:px-20 py-[56px] px-6 flex flex-col gap-8 lg:gap-20">
        <div className="flex flex-col gap-5">
          <div className="lg:px-10 flex flex-col gap-5 lg:gap-0">
            <h1 className="text-[32px] lg:text-[48px] text-[#8F7D5E] font-semibold ">
              Descubra a beleza que te transborda
            </h1>
            <span className="md:text-justify text-[#4D4D4D] font-normal ">
              Na Clínica Dra. Stéphanie Angelo, acreditamos que a beleza é uma
              jornada única, um caminho de autodescoberta e transformação. Mais
              do que apenas aparência, é a expressão da sua melhor versão, a
              confiança que irradia de dentro para fora e a felicidade que
              transborda em cada sorriso.
            </span>
          </div>
          <div className="h-[190px] lg:h-[640px] relative">
            <Image
              src={clinic1}
              placeholder="blur"
              priority
              fill
              alt="Ambiente acolhedor"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="lg:px-10 flex flex-col gap-5 lg:gap-0">
            <h1 className="text-[32px]  text-[#8F7D5E] font-semibold ">
              Um refúgio acolhedor
            </h1>
            <span className="md:text-justify text-[#4D4D4D] font-normal ">
              Imagine um lugar onde você se sente acolhida, onde cada detalhe
              foi pensado para proporcionar uma experiência memorável. Um
              ambiente elegante e sofisticado, onde a atenção aos detalhes e a
              excelência em cada procedimento garantem resultados impecáveis e
              experiências únicas.
            </span>
          </div>
          <div className="h-[190px] lg:h-[640px] relative">
            <Image fill src={clinic2} alt="Ambiente acolhedor" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="lg:px-10 flex flex-col gap-5 lg:gap-0">
            <h1 className="text-[32px]  text-[#8F7D5E] font-semibold ">
              Nossa missão: Encantar você
            </h1>
            <span className="md:text-justify text-[#4D4D4D] font-normal ">
              Na Clínica Dra. Stéphanie Angelo, cada paciente é único.
              Acreditamos que a estética deve ser personalizada, feita com amor
              e carinho, para que você se sinta linda e confiante por dentro e
              por fora. Nossa missão é elevar sua autoestima, proporcionando um
              ambiente acolhedor e elegante, onde a atenção aos detalhes e a
              excelência em cada procedimento garantem resultados impecáveis e
              experiências memoráveis.
            </span>
          </div>
          <div className="h-[190px] lg:h-[640px] relative">
            <Image fill src={clinic3} alt="Ambiente acolhedor" />
          </div>
        </div>

        <div className="lg:px-10 flex flex-col gap-5">
          <h1 className="text-[32px]  text-[#8F7D5E] font-semibold ">
            Nossos valores: A base da nossa paixão
          </h1>
          <ul className="text-[#4D4D4D] text-justify text-lg font-normal">
            {values.map((value, index) => {
              const [key, ...rest] = value.split(': ')
              const description = rest.join(': ')

              return (
                <li key={index}>
                  <strong>{key}:</strong> {description}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="lg:px-10 flex flex-col gap-[30px]">
          <h1 className="text-[32px]  text-[#8F7D5E] font-semibold ">
            Sua jornada começa aqui
          </h1>
          <span className="md:text-justify text-[#4D4D4D] font-normal ">
            Entre em contato conosco hoje mesmo e agende sua consulta. Dê o
            primeiro passo em direção à sua melhor versão!
          </span>
        </div>
        <Link
          href={createWhatsAppLink({
            message:
              'Olá, me encantei com a clínica que vi no site, gostaria de conhecer!',
            phoneNumber: WhatsappNumbersEnum.CLINICA,
          })}
        >
          <Button className="max-w-fit lg:ml-10">Agende seu horário</Button>
        </Link>
      </div>
    </main>
  )
}
