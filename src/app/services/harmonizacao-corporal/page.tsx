import { ServicesSection } from '../components/servicesSection'
import React from 'react'
import posCirurgico from '../../../../public/posCirurgico.jpeg'
import gluteo from '../../../../public/gluteu.jpeg'
import refyne from '../../../../public/refyne.jpeg'
import emagrecimento from '../../../../public/emagrecimento.jpeg'

const columns = [
  {
    title: 'Protocolo ajuste pós cirúrgico',
    description:
      'Protocolo desenvolvido para pessoas insatisfeitas com resultados de cirurgias como lipoescultura, LAD, HD, entre outras, oferecemos uma solução não cirúrgica! O protocolo consiste na mobilização de gordura que causa irregularidades na camada da pele, utilizando aplicação de ativos lipolíticos e bioestimuladores de colágeno. Espera-se uma melhoria nas fibroses e alinhamento das gorduras localizadas, resultando em uma aparência mais uniforme e firme.',
    imageUrl: posCirurgico,
  },

  {
    title: 'Harmonização glútea',
    description:
      'Protocolo que visa restaurar a simetria e firmeza do glúteo agindo em 3 aspectos:',
    imageUrl: gluteo,
    listItems: [
      'Melhora do aspecto geral, tratamento multicamadas',
      'Melhora da flacidez e firmeza com aplicação dos bioestimuladores de colágeno',
      'Correção e volumização de assimetrias com preenchimento a base de ácido hialurônico.',
    ],
  },

  {
    title: 'Protocolo Refyne/definição abdominal ',
    description:
      'Desenvolvido para pessoas com baixo percentual de gordura que desejam reduzir o volume de gordura que prejudica a definição abdominal e manter a massa muscular! Este protocolo envolve aplicações de nossa formulação exclusiva localizada e injeções para acelerar o metabolismo e preservar a massa magra.',
    imageUrl: refyne,
  },

  {
    title: 'Protocolo medida/emagrecimento ',
    description:
      'Protocolo específico direcionado para a perda de gordura localizada e emagrecimento. Este procedimento inclui a aplicação de nossa fórmula exclusiva de forma localizada, juntamente com injeções contendo ativos que ajudam a acelerar o metabolismo, proporcionando energia para o treino e sensação de saciedade.',
    imageUrl: emagrecimento,
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
