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

const aboutComponents: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: 'A Clínica',
    href: '/docs/primitives/alert-dialog',
    description:
      'Realce seus pontos fortes e corrija imperfeições como marcas de expressão e sinta sua melhor versão',
  },
  {
    title: 'Dra. Stéphanie Angelo',
    href: '/docs/primitives/hover-card',
    description:
      'Técnicas que visam remodelar seu corpo, eliminar gorduras localizadas com resultados eficazes',
  },
  {
    title: 'Equipe',
    href: '/docs/primitives/progress',
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
    href: '/docs/primitives/alert-dialog',
    description:
      'Realce seus pontos fortes e corrija imperfeições como marcas de expressão e sinta sua melhor versão',
  },
  {
    title: 'Endereço',
    href: '/docs/primitives/hover-card',
    description:
      'Técnicas que visam remodelar seu corpo, eliminar gorduras localizadas com resultados eficazes',
  },
  {
    title: 'Blog',
    href: '/docs/primitives/progress',
    description:
      'Ganhe qualidade de vida promovendo seu bem-estar físico e mental com massagens relaxantes e terapêuticas',
  },
]

export function Header() {
  return (
    <>
      <header className="hidden lg:flex gap-8 py-5 px-20 bg-[#F4F1F0] w-screen">
        <div>
          <Image src={logo} alt="Logotipo" />
        </div>

        <NavigationMenuHeader />

        <div className="flex items-center justify-center">
          <button className="text-base leading-[24px] font-medium border border-[#BAB09B] rounded-sm max-w-[165px] text-[#F4F1F0] bg-[#8F7D5E] h-full w-full py-3 px-12 ">
            Contato
          </button>
        </div>
      </header>

      <header className="lg:hidden flex items-center justify-between px-6 py-7">
        <div>
          <Image src={logo} alt="Logotipo" />
        </div>

        <Sheet>
          <SheetTrigger>
            <MenuIcon size={'24'} color="#8F7D5E" />
          </SheetTrigger>

          <SheetContent className="px-6 pt-20 flex flex-col gap-6 overflow-auto">
            <SheetHeader>
              <SheetTitle>
                <Image src={logo} alt="Logotipo" />
              </SheetTitle>
              <SheetDescription>
                <button className="bg-[#4D4D4D] flex items-center justify-center w-full h-12 text-[#F4F1F0] rounded-sm shadow-sm">
                  Agende seu horário
                </button>
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
