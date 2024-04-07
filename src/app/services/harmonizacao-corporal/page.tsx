import { ServicesSection } from '../components/servicesSection'
import React from 'react'

const columns = [
  {
    title: 'Protocolo ajuste pós cirúrgico',
    description:
      'Protocolo desenvolvido para pessoas insatisfeitas com resultados de cirurgias como lipoescultura, LAD, HD, entre outras, oferecemos uma solução não cirúrgica! O protocolo consiste na mobilização de gordura que causa irregularidades na camada da pele, utilizando aplicação de ativos lipolíticos e bioestimuladores de colágeno. Espera-se uma melhoria nas fibroses e alinhamento das gorduras localizadas, resultando em uma aparência mais uniforme e firme.',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/975f/8dce/7a69dcc5f238aeaf769277edfdaa15e8?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FqaLWBZbVQHnEM4N~udroz9IrP0toak8H7MbrUg3S1yQWQ-mmjUIdCRy1HcZJBu8WprBpUhNBCIgcPYpKtio4H8XbS-VnmPPw6XqNmoV8IJFyrKkc2XOyDSRjJdDzP8oqY5to0hGkqm6xYCyOpnwHLqtKPQarjuVayY68IN5Y6-zmZ3CNfJhLwvmZMIgcz2q45wa9VJk6CJnVO5QVXfhU8uiFsfNBzFEoCPWoG~jJazT~QfBD9IdmMbim8owfZrh-hzHuUYb7ePIilFBoPCxEGmZT3YhojDoaMsIZG-lT4U4zb704GqKjPn07l2SyTQWByvcu9nqU8kgYWgwmjnwiw__',
  },

  {
    title: 'Harmonização glútea',
    description:
      'Protocolo desenvolvido para pessoas insatisfeitas com resultados de cirurgias como lipoescultura, LAD, HD, entre outras, oferecemos uma solução não cirúrgica! O protocolo consiste na mobilização de gordura que causa irregularidades na camada da pele, utilizando aplicação de ativos lipolíticos e bioestimuladores de colágeno. Espera-se uma melhoria nas fibroses e alinhamento das gorduras localizadas, resultando em uma aparência mais uniforme e firme.',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/8807/24fd/1660e4c02124bdbe8b70d1261c71b123?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TeiMjh2woRaGwwXyBUhEEGpWApHc~EHuNRx7uGZYseEZSkWNEE1QVyMc3BEbtabA3zCFrkIdjHG0wO4t1SuywfKy1xSpjh1LmCo7FrOXyba-Zo2yG~Rxl3BH0R~BaEW1C7r0pedByEhhIDz8UuyIoZ5kqmUHFUUD7tO6TrFYDNeV7fBWn-NdaVXYG9Tg2nl8HfVOSQ4~KgQfkHqNsaUMup80zTkSdj8GLCuLVXXfaODMBkO~c1BafC5Wji1TYxGagQBepx-WvchUpPl99BJcxKj0ECzcT3q5t~3eFG3R8RgtAn-Q4agcAjRZmP-BaC0FwSzGHDaSotXItC2FTirZYw__',
  },

  {
    title: 'Protocolo Refyne/definição abdominal ',
    description:
      'Desenvolvido para pessoas com baixo percentual de gordura que desejam reduzir o volume de gordura que prejudica a definição abdominal e manter a massa muscular! Este protocolo envolve aplicações de nossa formulação exclusiva localizada e injeções para acelerar o metabolismo e preservar a massa magra.',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/dfa7/a98c/63a794b2a5723579e32ff67d4ed42bda?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MqNjTb2T3qlYuKVOh0i0zxIHlUK-xrHc-pqZ-pyN57V-DAeh6q-NKfYpv-OBPWaZqZ-aVv7H0lg44x5jpkAAdPkxOZ9hkqqzxQA30fhckGmV0jF2RbVI3cb6572nB-jdWH~0gRd6DqNLbOT-CvCNnXimRudbMn7tF4aAG0mg9lFSC5rBTBy8W15rFzcG6X5W550~T19WgLlWitSiYVe-tY3su-AHO8lwgIiR6RGzWstkQH29dyGnbtcO94S5JnoJw2mQMHJjqNgdH1z4h0zuFIRfS7nUXHOWH9RwrgTfpSEeLy4qx5EaKht778SfDTtxm2OqKd-MVkLwmEfPduBGSA__',
  },

  {
    title: 'Protocolo medida/emagrecimento ',
    description:
      'Protocolo específico direcionado para a perda de gordura localizada e emagrecimento. Este procedimento inclui a aplicação de nossa fórmula exclusiva de forma localizada, juntamente com injeções contendo ativos que ajudam a acelerar o metabolismo, proporcionando energia para o treino e sensação de saciedade.',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/90c5/03b1/d8fe61bdfcde73ac2c74442bbc9aab40?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XlPHDbOyEWNJAUbyiDmEqfP~7nmk1W7FQLiB5ELf0xY5z6zNffa1AQqgg7Hq3-mjHQqG~K1Txj5utNqccCLVWpZ1tQv8MjQFDyZhZE04olRuCpekDl5vS615FasTSQc-27ZyIwt4PUb7wN~zoxUX9AP5p9NYcCDoIE9zku~TsvHmvz7V5LOXchxFVKEe3K1KaE9NvVYhzEzNNyQp73oTZZibqYOWM60Gfsyk1scyG1dDyErej0zMXggk4g4IPqLi6OrX9NYwc6xjOS1aZ7ofXkn3Q6G5v0YtB8AkqPHN-v54VpTqhclzSNkC65Y6GBqUM1ThjLd2eyJWi2Y~mStNLw__',
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
            imageUrl={section.imageUrl}
          />
        )
      })}
    </div>
  )
}
