import { ServicesSection } from '../components/servicesSection'
import React from 'react'

import massoterapia from '../../../../public/massoterapia.jpeg'
import jetbronze from '../../../../public/jetbronze.jpeg'
import pele from '../../../../public/limpezaDePele.jpeg'

const columns = [
  {
    title: 'Massoterapia',
    description:
      'Relaxe, rejuvenesça e revitalize-se com uma massagem profissional.',
    imageUrl: massoterapia,
    listItems: [
      'Redução do estresse',
      'Alívio das dores musculares',
      'Melhora da circulação sanguínea',
      'Aumento da flexibilidade',
      'Melhora da qualidade do sono',
    ],
  },

  {
    title: 'Jetbronze',
    description:
      'Um bronzeado perfeito e duradouro sem sol com produtos que não agridem a sua pele. Alguns dos benefícios do JetBronze incluem:',
    imageUrl: jetbronze,
    listItems: [
      'Bronzeado natural e duradouro',
      'Seguro e eficaz',
      'Sem risco de queimaduras',
      'Sem risco de envelhecimento precoce',
      'Sem risco de câncer de pele',
      'Processo rápido e fácil',
      'Confortável e relaxante',
      'Ideal para todas as ocasiões',
    ],
  },

  {
    title: 'Limpeza de pele',
    description:
      'Sua melhor escolha para uma pele limpa, saudável e radiante. Alguns dos benefícios da limpeza de pele:',
    imageUrl: pele,
    listItems: [
      'Remove as impurezas e células mortas',
      'Reduz a oleosidade da pele',
      'Previne o surgimento de cravos e espinhas',
      'Melhora a absorção de produtos de beleza',
      'Deixa a pele limpa, macia e radiante',
    ],
  },
]

export default function Page() {
  return (
    <div className="overflow-x-hidden bg-red-500 w-full">
      {columns.map((section, index) => {
        return (
          <ServicesSection
            key={index}
            index={index + 1}
            description={section.description}
            title={section.title}
            listItems={section.listItems && section.listItems}
            imageUrl={section.imageUrl}
          />
        )
      })}
    </div>
  )
}
