import Image from 'next/image'
import { getProfessional } from '../../../../sanity/querys/professional/get'
import { urlForImage } from '../../../../sanity/lib/image'

import { PortableText } from '@portabletext/react'
import SectionSeeOtherProfessionals from '@/components/professional/SectionSeeOtherProfessionals'

export default async function Page({ params }: { params: { slug: string } }) {
  const profissional = await getProfessional(params.slug)
  return profissional ? (
    <main className="flex flex-col">
      <div className="relative w-full h-[240px] md:h-[640px]">
        <Image
          src={urlForImage(profissional.mainImage)}
          fill
          className="object-cover"
          alt="Nosso profissional"
        />
      </div>

      <div className="px-6 py-10 flex flex-col gap-5 lg:gap-8 lg:py-20 lg:px-20">
        <h1 className="text-[#8F7D5E] font-medium text-[32px] lg:text-[48px]">
          {profissional.name}
        </h1>
        <PortableText
          value={profissional.body}
          components={{
            block: {
              h1: ({ children }) => (
                <h1 className="text-3xl text-[#4D4D4D] font-bold leading-9 pb-2">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl text-[#4D4D4D] font-bold leading-8 pb-2">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl text-[#4D4D4D] font-bold leading-6 pb-2">
                  {children}
                </h3>
              ),

              h4: ({ children }) => (
                <h4 className="text-lg text-[#4D4D4D] font-bold leading-6 pb-2">
                  {children}
                </h4>
              ),
              normal: ({ children }) => (
                <p className="text-base text-[#4D4D4D] font-normal leading-6 lg:px-10 pb-2">
                  {children}
                </p>
              ),
            },
            listItem: {
              number: ({ children }) => (
                <li style={{ listStyleType: 'decimal' }}>{children}</li>
              ),
              bullet: ({ children }) => (
                <li
                  style={{
                    listStyleType: 'disc',
                    marginLeft: '16px',
                  }}
                >
                  {children}
                </li>
              ),
            },
            marks: {
              link: ({ value, children }) => (
                <a
                  href={`${value.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline"
                >
                  {children}
                </a>
              ),
            },
            types: {
              image: ({ value }) => (
                <div className="relative lg:h-[600px]">
                  <Image src={urlForImage(value)} alt={value.alt} fill />
                </div>
              ),
            },
          }}
        />

        <SectionSeeOtherProfessionals />
      </div>
    </main>
  ) : (
    <div>
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, a profissional que você buscou não foi achado.</p>
      {/* Adicione aqui quaisquer outras informações ou componentes que você queira exibir */}
    </div>
  )
}
