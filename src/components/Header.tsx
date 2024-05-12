'use client'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { MenuIcon } from 'lucide-react'
import { NavigationMenuHeader, components } from './NavigationMenuHeader'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { cn } from '@/lib/utils'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import {
  WhatsappNumbersEnum,
  createWhatsAppLink,
} from '@/utils/whatsappLinkGenerator'

const aboutComponents: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: 'A Clínica',
    href: '/clinica',
    description:
      'Realce seus pontos fortes e corrija imperfeições como marcas de expressão e sinta sua melhor versão',
  },
  {
    title: 'Dra. Stéphanie Angelo',
    href: '/stephanie-angelo',
    description: 'Conheça sobre a Dra. Stephanie, nossa especialista.',
  },
  {
    title: 'Equipe',
    href: '/profissionais',
    description:
      'Ganhe qualidade de vida promovendo seu bem-estar físico e mental com massagens relaxantes e terapêuticas',
  },
]

const othersComponents: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: 'Cursos',
    href: '/cursos',
    description:
      'Realce seus pontos fortes e corrija imperfeições como marcas de expressão e sinta sua melhor versão',
  },
  {
    title: 'Endereço',
    href: 'https://www.google.com/maps/place/Av.+Jos%C3%A9+Loureiro+da+Silva,+2025+-+Sala+1201+-+Centro,+Gravata%C3%AD+-+RS,+94010-000/data=!4m2!3m1!1s0x95190b4121f00001:0x382d2aeed9f1db74?sa=X&ved=1t:242&ictx=111',
    description: 'Saiba como chegar na nossa clínica',
  },
  {
    title: 'Blog',
    href: '/blog',
    description: 'Confira as últimas do nosso blog',
  },
]

export function Header() {
  return (
    <>
      <header className="hidden lg:flex gap-8 py-5 px-20 bg-[#F4F1F0] ">
        <div>
          <Link href={'/'}>
            <Image src={logo} alt="Logotipo" />
          </Link>
        </div>

        <NavigationMenuHeader />

        <div className="flex items-center justify-center">
          <Link
            href={createWhatsAppLink({
              message: ' Olá, vim pelo site! Gostaria de mais informações',
              phoneNumber: WhatsappNumbersEnum.CLINICA,
            })}
          >
            <Button className="bg-[#8F7D5E] hover:bg-[#8F7D5E]/90">
              Contato
            </Button>
          </Link>
        </div>
      </header>

      <header className="lg:hidden flex items-center justify-between px-6 py-7">
        <div>
          <Link href={'/'}>
            <Image src={logo} alt="Logotipo" />
          </Link>
        </div>

        <Sheet>
          <SheetTrigger>
            <MenuIcon size={'24'} color="#8F7D5E" />
          </SheetTrigger>

          <SheetContent className="px-6 pt-20 flex flex-col gap-0 overflow-auto">
            <SheetHeader>
              <SheetTitle>
                <Image src={logo} alt="Logotipo" />
              </SheetTitle>
              <SheetDescription className="pb-5">
                <Link
                  href={createWhatsAppLink({
                    message:
                      ' Olá, vim pelo site! Gostaria de agendar um horário',
                    phoneNumber: WhatsappNumbersEnum.CLINICA,
                  })}
                >
                  <Button className="bg-[#4D4D4D] hover:bg-[#4D4D4D]/90">
                    Agende seu horário
                  </Button>
                </Link>
              </SheetDescription>
            </SheetHeader>

            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="item-1" className="px-6">
                <AccordionTrigger>Sobre</AccordionTrigger>
                <AccordionContent>
                  {aboutComponents.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="px-6">
                <AccordionTrigger>Tratamentos</AccordionTrigger>
                <AccordionContent>
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="px-6">
                <AccordionTrigger>Outros</AccordionTrigger>
                <AccordionContent>
                  {othersComponents.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <>
              {othersComponents.map((component) => (
                <Link
                  key={component.title}
                  className="px-6 font-medium border-b py-4"
                  href={component.href}
                >
                  <span className="hover:underline">{component.title}</span>
                </Link>
              ))}
            </>
          </SheetContent>
        </Sheet>
      </header>
    </>
  )
}

export const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }) => {
  return (
    <li className="list-none">
      <div
        className={cn(
          'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
          className,
        )}
      >
        <a
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#E9E4DD] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-[#8F7D5E]">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-[#4D4D4D]">
            {children}
          </p>
        </a>
      </div>
    </li>
  )
})
ListItem.displayName = 'ListItem'
