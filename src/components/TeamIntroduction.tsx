import Image from 'next/image'

import { Button } from './ui/button'
import Link from 'next/link'

export function TeamIntroduction() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 bg-red-50">
      <div className="relative h-[440px] lg:h-[560px]">
        <Image
          src={
            'https://s3-alpha-sig.figma.com/img/30e4/cd6d/fe04c0d87ef836961b56ee2193e6e0f4?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VsQBJi1UjXZRBUiimgptcWuMJHPblJvme1-ywvjPtPFcPnpLrBTdOphBOJRfwo9BXmrv-rl3VcVQqvPcT-YJc28s-VY2CcfpW35Ot69dWwNjPZPYhL2WYIZmfl5mBlmfzWnMNkChKRLOAf-RiFdkN0B9Ia9q3LvdbLnnt5MozqBWp~Lh3jcq51zVtwRmW1dZxic7qtXfZ~tUtA9bbNjeLJBPTop05vukNGeZPooKT1EOUtMI8rEY~cdEkVjyb-p6JUEPF3RAo4kQYHG2A54tp9AUWWPaOTKmVqNg4fz1Y8yi8GR7pmroaaXipAWt3dmhcfjaItJpXxMJ0CeKIrIzWw__'
          }
          fill
          loading="lazy"
          alt="Membros do nosso time"
          className="object-cover object-center lg:object-bottom"
        />
      </div>
      <div className="lg:px-20 px-6 py-12 lg:py-0 h-full flex flex-col justify-center gap-6">
        <h2 className="text-[32px] lg:text-[48px] font-medium leading-[58px] text-[#8F7D5E]">
          Prontos para te receber
        </h2>

        <span className="text-[18px] font-normal leading-[27px] text-[#4D4D4D]">
          Somos apaixonados por cuidar da saúde e bem-estar dos nossos
          pacientes. Estamos prontos para oferecer as melhores experiências de
          beleza e autocuidado.
        </span>

        <Link href={'/profissionais'}>
          <Button className="lg:max-w-[240px]">
            Conheça nossos profissionais
          </Button>
        </Link>
      </div>
    </div>
  )
}
