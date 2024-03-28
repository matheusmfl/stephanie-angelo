'use client'

import * as React from 'react'
import logoNav from '@/assets/logoNavigation.svg'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Image from 'next/image'

export const components: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: 'Harmonização Facial',
    href: '/docs/primitives/alert-dialog',
    description:
      'Realce seus pontos fortes e corrija imperfeições como marcas de expressão e sinta sua melhor versão',
  },
  {
    title: 'Harmonização Corporal',
    href: '/docs/primitives/hover-card',
    description:
      'Técnicas que visam remodelar seu corpo, eliminar gorduras localizadas com resultados eficazes',
  },
  {
    title: 'Massoterapia',
    href: '/docs/primitives/progress',
    description:
      'Ganhe qualidade de vida promovendo seu bem-estar físico e mental com massagens relaxantes e terapêuticas',
  },
  {
    title: 'Jetbronze',
    href: '/docs/primitives/scroll-area',
    description:
      'O Jetbronze é um método seguro e eficaz de bronzeamento artificial que não causa danos à pele',
  },
  {
    title: 'Limpeza de Pele',
    href: '/docs/primitives/tabs',
    description:
      'Elimine impurezas, renove a sua pele e desfrute da maciez e saúde que ela merece',
  },
]

export function NavigationMenuHeader() {
  return (
    <div className="hidden lg:flex items-center justify-center flex-1">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-10">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-[#F4F1F0]">
              Sobre
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[#F4F1F0]">
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[#F4F1F0] p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-sm text-[#8F7D5E] flex flex-col gap-2 font-medium">
                        <Image src={logoNav} alt="" />
                        Clínica Stéphanie Angelo
                      </div>
                      <p className="text-sm  text-muted-foreground">
                        Mais de 800 vidas transformadas
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="A Clínica">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem
                  href="/docs/installation"
                  title="Dra. Stéphanie Angelo"
                >
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Equipe">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-[#F4F1F0]">
              Tratamentos
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[#F4F1F0]">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="bg-[#F4F1F0]">
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className="bg-[#F4F1F0]">
                Cursos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="bg-[#F4F1F0]">
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className="bg-[#F4F1F0]">
                Endereço
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="bg-[#F4F1F0]">
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className="bg-[#F4F1F0]">
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
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
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
