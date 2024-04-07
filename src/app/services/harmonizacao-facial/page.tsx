import { ServicesSection } from '../components/servicesSection'

const columns = [
  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/182e/e95a/5c5757f3d31348251107d8063975df18?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d7obAgg7DY2X54FTMPupnQbma604SWuoM5ur8ObOoPK-8HIewFbMaJ6EtlK6N3emZKlt24H-gLqG7t8N6A9y5ox6SoWOk-hE0Vp~lxDafXIdgHS42jR4LdKnMTgEXk6IRWlc1Hawrb8oJ1nnDok0WpTQSrRe-tBGxaE3mazkQxhLO7HSlTwc4I0cem6lhVBB4Jzx1341ZoiYnlconNL652RJ0htd7fY8dO3Eh1PqDMUMhDxvCvKhgMrCHcZ2wNH4T4i4HnK5WjCdnFUD35J6HJZdVBErCFxL8BGySCljcuAsVLOjU~ZL5n2nLcRLxRXgfiPe561guTN-VoYy9Nb-Kw__',
    title: 'Mapeamento facial',
    description:
      'Nosso mapeamento facial é o ponto de partida para uma harmonização personalizada e eficaz. Analisamos minuciosamente seu rosto para identificar suas necessidades específicas e planejar o tratamento ideal para você.',
  },

  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/8d41/7722/8fa266a6935a3b9b40aa8c6f8b303fc7?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R1e2qalZiGQznzGxPv8Og5ckmjdPwpDaLHNLuU~l-TDQaZfe40-x3saWtE4cgt6CYjbCz39~SFW2rfdbpeu-4IFHfT8ox1t0tGg3CsYUgOVX-~A928qDQ0cUj7BF-873iME4BoO82J2MtKP137SyCTyf1SGA65OXO6wKfq8hRjdgsCYcdeFKVLQYgBAVjRDv2~cX9ncsfZE71DASJdfYPO4-WpQjsoJugROvqfXFCSNxEj9upWyAlgUg9CPCs~lVy-jWHkygKgt-93lCOVLUOq5c9RlRD8p6C1zZOsrfwTArEbVjJvaxR3qRprwPjMUx5SuSoh37h4NcxVZnJIbK9A__',
    title: 'Bioestimuladores de colágeno',
    description:
      'Nossos bioestimuladores de colágeno ativam naturalmente a produção de colágeno na pele, proporcionando firmeza, elasticidade e hidratação. Ideal para rugas, linhas de expressão e flacidez.',
  },

  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/dc40/1c2d/832017122297515ca661e33da1f46225?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V9KLGGVmiWPSF0fUvYzWSUKRJloRcPqZpCMc00VNgmFA24WjytLU6oEHP8MtSvPRpyKfsu~lJd9eEbzkfVf7xDyQh~Qv7xHZEOSzQqhegfC-x9XMZ8QmnyuRLcV27YOQQY4sI~EJOQBgpQ97PvuOwzZnRckQ6xVrneyoUrCkFw~n93qd2MiFUsQC8VWJRCuaIL3drLXjNl~OhsJj~Hteyjb4KcZ9~ON0wnyCS5WhNUN-Fm~-5DePcswr4GXy3wJgVkigR4UqYwSus7pTGxHau-xepZsV2-hhGSO7KC-apQzzuiY-eHBTE8M64owlro7sSRWVziyX3ieZxxLahQlWWw__',
    title: 'Toxina botulínica',
    description:
      'A toxina botulínica, conhecida como Botox®, é um tratamento eficaz para suavizar rugas e linhas de expressão, focando especialmente na testa, glabela (entre as sobrancelhas) e área ao redor dos olhos.',
  },

  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/61fd/e0f8/88fa824f4b78ef8930ed8c9bb28e9e1f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pYH0BLvQfVYSZW8S1gs~L314PcYPV9XN1CCHJL59hj1MrCwxPhkeI-aAmkwUU~0zEHYevgvDp3g~q4MQI9BskmEhxhtTK4eOoKFAAaHOmBoKrrv-9PSxHISP4kJ51nOB4hNXX2lFSWjoPelHFYQGkHGt~QWdRFbZtU5b2ddoSmGhqDVUQVzAQT-hXms8JFnlL94fxAN2lkpyT783A~WL5Kyp5QWggy2~dk669frQuLqvflcoj3BwJCWq4W3TCeHv4QKrwlW6zPiraL761cnKQyZiro~3YzlZv~EGSxhhap28yfvFRjzJ~et9dSx3XEEB2HYTpDi23uK6aU-UL1u1uw__',
    title: 'Fios lisos de PDO',
    description:
      'Nossos fios lisos de PDO são feitos de polidioxanona, um material biocompatível e absorvível pelo corpo. Eles são projetados para estimular a produção de colágeno, proporcionando firmeza e sustentação à pele, além de tratar rugas, linhas de expressão e flacidez.',
  },
  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/9cae/27fa/936894aae3bccd5e2ecffaf2f3ba5911?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GURQqhiHVKTgBOc39NqzoGILWpqe1z2thJzzwxVfB-azrhGTeM66qsorklN7yPIcqZkJfgYNCyCyfFRpXYfHUNtDRvmGubrcwV3pP1OPyIo2YclRLQYJw5tErr5kSsriRJMl5JqtQ8hOqd0hmJ4qKygGI99gQFAfPRyGGuSOB8TZY6tMOXsdnrYlqvMTWw-mhu-Fx8YvE9gXbdKwEs3x~GPEXtds0P9oqvE4pyJmR3ZtPzkJ3CBa-6u2f3sasaFVkDc~EWI8cuCZesKAJdYee49s-VJMz10h68eJ7tthW~WM4rTfVnRTTWDiNHNeDkYl~HDjAu08nQfEmBSdmXXXWA__',
    title: 'Preenchimento labial',
    description:
      'Nosso preenchimento labial utiliza ácido hialurônico para aumentar o volume, definir o contorno e corrigir assimetrias dos lábios.',
  },

  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/1282/8e04/e6ffdf24b956d266c0091178cfd86c54?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ck3PwiwJgUeO7GUXK97LN0v9CPDQ35MyLYiBSDKjnqHZHOQxnF5~r0feC~6DsXP847oYDtPgMbbBZv~Be43Pd8EGpl5q6Yh705jfXaLZEHz4KZlHgvb2hEAHmagoF1oOcjZGeVYC7WyLWINHQmBdCPx8RLaRfH9GhF1ieF4x1q~RmEAkLoVAnbrvWnr0FUzDAzisWqsygjY4fX8hec3jZNXOfS~SKhAwpWRPvZmqCcaR3eSIrMH8Gd~woYmkANccK-IHUzmkYr~VGel8a~gs5KYuhn6ndfZn1YCb4-xuwknihDZQCl8KdYiCSHscQ4okUkHR6I0tzoWKvQDr~N-yYQ__',
    title: 'Preenchimento de olheiras',
    description:
      'Nosso preenchimento de olheiras emprega ácido hialurônico para reduzir olheiras profundas e escuras, proporcionando um olhar mais jovem e descansado.',
  },

  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/316d/5000/df62569fd4b8a7f1f8d2ade3b4ae853f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QUG0HOBoQstxXBeLAoLqZ-ij2VK~XmzktWPqelaf6AUE~ss~PRvpl9AfEjDG4CFiTFDnHzIxg04g16~wBoVUMaCYG~dqzjY8ZHObMJ377dGrgTvlDJW1OisH--3d0S8CeyXj00EuB117aPCOmfOUVAHKtmUOAMwFs9CLSzpylyEHVrN99t0XOiwDlqZ4I-W4B4LGNAp3~8p4wB~wRmgirCfubmbJcc2NfTDoQS~K7v5rwl-LbkdKq2QZ~dNUXZfHjd6UoBJfg-jNsKiGOmk4dH0RMPTtbCkYASj2WDHsNtKtXkaxHSi7sZwSTrvr8cjFPsMBmoJh-bCgGhdL0x5vJQ__',
    title: 'Preenchimento de mandíbula',
    description:
      'Nosso preenchimento de mandíbula utiliza ácido hialurônico para definir o contorno, projetar o ângulo e harmonizar o perfil facial.',
  },

  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/b68c/00a0/d1ffa5de4a28abee101318231046fbf7?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ftsS9707wKsfSoHRiSAy2ad6jLvOFnQKHjZKJ7HlBCimpBcVn-GFXUbX2KPopjC080qSe7KDbTYXBTcNQ4asOpeNjn~Y9szUY0z7uYdV51T8lh~PmElbX54CNpe96sOOAsoCQv7OcTn6~hiVufCov-UC2ly9RqKXtxTeRNEEnF9KK~Cbdm4q~mgc0~414nLC9m5d2zlATt-kmu7GHjRXGNsYFE4hqApkAa5L1IAWWkhLUO4dgxzkFEFmeJ4Od-IiXAhfIZwLbbffmWWxWyZjQK8VHhH4UxVAE23udsZFRnMt5K9ZLDlwg7FoBeZXicAWYY6MteXeG3LDrfh58h2y~A__',
    title: 'Preenchimento de mento (queixo)',
    description:
      'Nosso preenchimento de mento (queixo) utiliza ácido hialurônico para aumentar o volume, projetar e harmonizar, remodelando o perfil facial.',
  },

  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/a482/62b0/547feda6e6586a55ddc5dbe281e24bd0?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eWGmi3h1rpgKqRwTLxJls1thyOWbTSUKPSj5YF7Fp8yBqcNnh1YKD8EDsjtzkA9AjcmKM9Qgv88YG74ba2I1ccUrXgu5zLQR-36DaraGc83UR0a7oW3YxQE4-~3MLz5gBxoqf0d7qZQcvaImutBBkcFY~-lThaPpBfVus~MUXQm0gKltiBDpVOHThnUXP-K6FWaUTTZd4q7zrzDiBwbw~BWJzc0SIAVjn5bjLVC3uet83gIaI7YUoROLWddmHwMuT40ekWAnVk0LRCffo4GXE3W6BTEOQeTG2090RkhP8YNJ5Yoh8-Msdvm5YQEsHYtb3JzdjuebGHpxlqFwgAXS5Q__',
    title: 'Rinomodelação',
    description:
      'A rinomodelação é um procedimento que utiliza ácido hialurônico para corrigir pequenas imperfeições no nariz, como assimetrias, giba nasal e ponta caída.',
  },

  {
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/af31/2438/aad12863f0008eed0fae5a99b97d50cf?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J5JsDpzOOBUraNF4DJvJyNHBmEks0f6jWnvRkk7i92mYdB0GrzB9RuJqKnXgWnI7NqDZntbRIj-VgCPk7s5BxkFPkugHF0AKe20POTa206M3tpuT49l5pjOpNZy9KErtnKhgZULOe5bIZgPuferZfrXMgHi7tMC~xTXsWWO9eU8~QWUEi1lAJqtWF7lglyCBaJz0DLvmUaJAvpMwZ9EI~QlLUfIA9jWUJp4Mzc9eSgfd3h928VkcSsPhdEnXezuwLvMpdk2rLpjas7kgp75uOzJu~15xBWwZJAlqIhREmu2TvqaEXiblzDUOH-XfG3pgClS6I3nedFb3bMHIex0OPw__',
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
