import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { CardFeedback, CardFeedbackProps } from './CardFeedback'

type CarouselProps = {
  depoimentos: CardFeedbackProps[]
}
export function CarouselBase({ depoimentos }: CarouselProps) {
  return (
    <Carousel>
      <CarouselContent className="">
        {depoimentos.map((depoimento, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
          >
            <CardFeedback
              starsNumber={depoimento.starsNumber}
              name={depoimento.name}
              message={depoimento.message}
              dark={!!depoimento.dark}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
