import { ServicesSection } from '../components/servicesSection'
import imgMapeamentoFacial from '../../../../public/mapeamentoFacial.jpeg'
import imgBioestimuladores from '../../../../public/bioestimuladores.jpeg'
import imgToxinaButolitica from '../../../../public/toxinabutolitica.jpeg'
import imgFiosLisos from '../../../../public/fiosLisos.jpeg'
import imgPreenchimentoLabial from '../../../../public/preenchimentoLabial.jpeg'
import imgOlheiras from '../../../../public/olheiras.jpeg'
import imgMandibulas from '../../../../public/mandibula.jpeg'
import imgMento from '../../../../public/mento.jpeg'
import imgRinomodelacao from '../../../../public/rinomodelacao.jpeg'
import imgSkinBooster from '../../../../public/skinbooster.jpeg'

const columns = [
  {
    imageUrl: imgMapeamentoFacial,
    title: 'Mapeamento facial',
    description:
      'Nosso mapeamento facial é o ponto de partida para uma harmonização personalizada e eficaz. Analisamos minuciosamente seu rosto para identificar suas necessidades específicas e planejar o tratamento ideal para você.',
  },

  {
    imageUrl: imgBioestimuladores,
    title: 'Bioestimuladores de colágeno',
    description:
      'Nossos bioestimuladores de colágeno ativam naturalmente a produção de colágeno na pele, proporcionando firmeza, elasticidade e hidratação. Ideal para rugas, linhas de expressão e flacidez.',
  },

  {
    imageUrl: imgToxinaButolitica,
    title: 'Toxina botulínica',
    description:
      'A toxina botulínica, conhecida como Botox®, é um tratamento eficaz para suavizar rugas e linhas de expressão, focando especialmente na testa, glabela (entre as sobrancelhas) e área ao redor dos olhos.',
  },

  {
    imageUrl: imgFiosLisos,
    title: 'Fios lisos de PDO',
    description:
      'Nossos fios lisos de PDO são feitos de polidioxanona, um material biocompatível e absorvível pelo corpo. Eles são projetados para estimular a produção de colágeno, proporcionando firmeza e sustentação à pele, além de tratar rugas, linhas de expressão e flacidez.',
  },
  {
    imageUrl: imgPreenchimentoLabial,
    title: 'Preenchimento labial',
    description:
      'O preenchimento labial utiliza ácido hialurônico para aumentar o volume, definir o contorno e corrigir assimetrias dos lábios.',
  },

  {
    imageUrl: imgOlheiras,
    title: 'Preenchimento de olheiras',
    description:
      'O preenchimento de olheiras emprega ácido hialurônico para reduzir olheiras profundas e escuras, proporcionando um olhar mais jovem e descansado.',
  },

  {
    imageUrl: imgMandibulas,
    title: 'Preenchimento de mandíbula',
    description:
      'O preenchimento de mandíbula utiliza ácido hialurônico para definir o contorno, projetar o ângulo e harmonizar o perfil facial.',
  },

  {
    imageUrl: imgMento,
    title: 'Preenchimento de mento (queixo)',
    description:
      'O preenchimento de mento (queixo) utiliza ácido hialurônico para aumentar o volume, projetar e harmonizar, remodelando o perfil facial.',
  },

  {
    imageUrl: imgRinomodelacao,
    title: 'Rinomodelação',
    description:
      'A rinomodelação é um procedimento que utiliza ácido hialurônico para corrigir pequenas imperfeições no nariz, como assimetrias, giba nasal e ponta caída.',
  },

  {
    imageUrl: imgSkinBooster,
    title: 'Skinbooster',
    description:
      'Nosso Skinbooster utiliza ácido hialurônico para hidratar profundamente a pele, promovendo firmeza, elasticidade e luminosidade.',
  },
]

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      {columns.map((section, index) => {
        return (
          <ServicesSection
            key={index}
            index={index + 1}
            description={section.description}
            title={section.title}
            imageUrl={section.imageUrl}
          />
        )
      })}
    </div>
  )
}
