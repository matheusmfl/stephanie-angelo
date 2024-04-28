import { ServicesSection } from '../components/servicesSection'
import React from 'react'

const columns = [
  {
    title: 'Massoterapia',
    description:
      'Relaxe, rejuvenesça e revitalize-se com uma massagem profissional.',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/970c/cb70/cca3c7e1cbcb22d42b7ad8afe24a2fec?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jYH-1~S9c97G80FwO~xsM1J9HM6ufXshGOFQt9m4tvdxMGnIH6fm85tbg2YRPNVVuFLug4yvDuLCvjeNGENdWJblfjosRrv~tpI-ncSbXc4P8PARtUuRPxMf4tbYnxnSNKdULsCpDrzGPnMVFk~A44xuYEAymMKktnmluastLw~chRYe51v0hb-PypwbQg3Fl5RoCIEZgInUTv5ZczUot01hhasOqa8imaZvnrVT2uKgFuYFIEEs8qPxMcWHrU4YEohB1j2KkImhG7A0qHC7BDg-fk3Zh793c3Hw~7gdGUl5loZzSN5-dleuy5jdchDxFK1ys4fRKQZIyqgV3S2r3Q__',
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
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/2037/e670/65b6637db69a570fa613e6df69111c91?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PuQ8lTBCALuVAjZWKH5qGTQazZK3vWzO29RqSnpqp6dF356F4ZFBMOfY9bOTf4kE8h9rTSG-tEiv4Gl-Bb~hWUZcmdiitPW16LPX~YuJ4mXyTBQNlBC6CaxHhjWe-RP~hQmFDkwrA~Xwht7ZASpgm~byy6zGfHa0cnqV41NkgRFSZWCoONfTV6cZEEqdDVJ~SZ-3lOdzg6Kt4s-UsY14i9WFpSLaloP9GNwHjWVZfHsFLKoyibsvvNlAGe-roXU9qHJW1g3IcaalkLQcZJkyzCYdzlPxDKfsjqlSN1XcekBcIvHLkAd44gq8gi61HM8dTVyUr2Xnf7gj2yy8DHz9Tg__',
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
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/2037/e670/65b6637db69a570fa613e6df69111c91?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PuQ8lTBCALuVAjZWKH5qGTQazZK3vWzO29RqSnpqp6dF356F4ZFBMOfY9bOTf4kE8h9rTSG-tEiv4Gl-Bb~hWUZcmdiitPW16LPX~YuJ4mXyTBQNlBC6CaxHhjWe-RP~hQmFDkwrA~Xwht7ZASpgm~byy6zGfHa0cnqV41NkgRFSZWCoONfTV6cZEEqdDVJ~SZ-3lOdzg6Kt4s-UsY14i9WFpSLaloP9GNwHjWVZfHsFLKoyibsvvNlAGe-roXU9qHJW1g3IcaalkLQcZJkyzCYdzlPxDKfsjqlSN1XcekBcIvHLkAd44gq8gi61HM8dTVyUr2Xnf7gj2yy8DHz9Tg__',
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
