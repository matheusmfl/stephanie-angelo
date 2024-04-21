import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { CardFeedback, CardFeedbackProps } from './CardFeedback'

const depoiments: CardFeedbackProps[] = [
  {
    starsNumber: 5,
    message:
      'Sempre tive medo de fazer procedimento estético no rosto...mas depois que conheci a Clínica e o trabalho da Dra Stéphanie, minha visão sobre procedimentos mudou completamente. Você já se sente especial na recepção. Ela tem um carinho,  respeito e o profissionalismo incrível com suas clientes.',
    name: 'Juliana Severo',
  },

  {
    starsNumber: 5,
    message:
      'Foi a melhor decisão da minha vida. O meu único arrependimento é não ter feito antes. A experiência por completo é incrível, toda equipe é um amor, simpáticas e extremamente atenciosas. O procedimento transformou todas as áreas da minha vida. Eu recomendo 100%.',
    name: 'Isadora Quadros',
  },
  {
    starsNumber: 5,
    message:
      'Atendimento impecável! Equipe super atenciosa! A Dra Stephanie que, além de  linda e querida, é extremamente competente. É uma profissional que passa tranquilidade e segurança no que faz. Simplesmente a melhor!!!',
    name: 'Dani Garcia',
  },
  {
    starsNumber: 5,
    message:
      'Foi incrível, desde que a recepção nos atende na porta, nos mimos que recebemos enquanto esperamos, ambiente gostoso, e o atendimento da Dra Stefany chega como a cereja do bolo, que nos proporciona muitos momentos satisfatórios e o trabalho impecável. Meu marido e minhas duas filhas são clientes!',
    name: 'Andreia Canuto',
  },
]
export function CarouselBase() {
  return (
    <Carousel>
      <CarouselContent className="">
        {depoiments.map((depoimento, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
          >
            <CardFeedback
              starsNumber={depoimento.starsNumber}
              name={depoimento.name}
              message={depoimento.message}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
