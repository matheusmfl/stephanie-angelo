import { Button } from '@/components/ui/button'
import {
  WhatsappNumbersEnum,
  createWhatsAppLink,
} from '@/utils/whatsappLinkGenerator'
import Image from 'next/image'
import Link from 'next/link'

const values = [
  'Encantamento: Encantar você em cada etapa da sua jornada é a nossa prioridade.',
  'Amor: Acreditamos no poder transformador do amor próprio e da autoaceitação.',
  'Cuidado: Cuidamos de você com carinho, ética e profissionalismo, desde a primeira consulta até o acompanhamento pós-procedimento.',
  'Elegância: A elegância permeia tudo o que fazemos, desde a estética da nossa clínica até a forma como tratamos cada paciente.',
  'Entusiasmo: Somos apaixonados por estética e pela transformação positiva que podemos proporcionar na vida das pessoas.',
  'Ética: A ética é a base de tudo o que fazemos, garantindo a segurança e a qualidade dos nossos procedimentos.',
  'Qualidade: Buscamos a excelência em tudo o que fazemos, desde os produtos utilizados até a tecnologia empregada nos nossos procedimentos.',
  'Confiança: Acreditamos que a confiança é fundamental para uma relação médico-paciente sólida e duradoura.',
]

export default function Page() {
  return (
    <main className="flex flex-col">
      <div className="w-full relative h-[240px] lg:h-[640px]">
        <Image
          src={
            'https://s3-alpha-sig.figma.com/img/05b3/549a/f0709ea5c2fb6c0f1505bfdcc9015fc3?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kLJaXNakSyWqsup4zkKGT-JG~Xg3Gt6h2DiRGMCF9ilNTZ-8kWRi-Vj3IbGPDIjUBzidKBBSXQ8hizVDO9jpclO2Ug~kfamnqHsw~Rzd~M-zdyxdYskgX3M77cOaLaExLUaOnN6WUCYCFg~sr6KPnO~UB5vuGG9tnqy0b6A~X0c0ch3j5rRA1NKeXwiAyysEqxfOsV-MqMsx9LWq7zjwqLe7dR5QNZobstGJ5Ly~5fYcjd1Ln03zZF8RoBF9kAuNJi0i1hxeZC-VsadY8ruBLpj9TYPQk3Uvy10Yhe9vDiOHubdl4s6VBxfRiEbH85KWbCcGMmNmjyYGMEUSSCooMA__'
          }
          fill
          alt="Foto da clínica"
        />
      </div>
      <div className="lg:py-20 lg:px-20 py-[56px] px-6 flex flex-col gap-8 lg:gap-20">
        <div className="flex flex-col gap-5">
          <div className="lg:px-10">
            <h1 className="text-[32px] lg:text-[48px] text-[#8F7D5E] font-semibold ">
              Descubra a beleza que te transborda
            </h1>
            <span className="md:text-justify text-[#4D4D4D] font-normal ">
              Na Clínica Dra. Stéphanie Angelo, acreditamos que a beleza é uma
              jornada única, um caminho de autodescoberta e transformação. Mais
              do que apenas aparência, é a expressão da sua melhor versão, a
              confiança que irradia de dentro para fora e a felicidade que
              transborda em cada sorriso.
            </span>
          </div>
          <div className="h-[190px] lg:h-[640px] relative">
            <Image
              src={
                'https://s3-alpha-sig.figma.com/img/53a0/2097/4dfe9ea6a7c1902ec810b2c878bbdb59?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTMTveG0-fh~jNskdm3fDcjAnXniprNR~xcX1i-yXakfhynjrek5uPvnGELNN2Sn0JXQItqx08ca5LtkfffmbfrmRIv1bp0yIwiGvOY8DGgisimBVHdcH~SE1RLVLDCRSEUW7CHM-Qz26cT3xMrVe5ESkZJgp-Wcm6~f0Wf01TDaJg0dJdvl2HTOFw7pM~mk7ekpFbIC3uYnswXPaMSrw1pjQtnnHpbm9DCP~rMtuSZtI2EWXYl9DTsA5NH7kgUBP6fut5tnTIIia38wOoWFcaK378ibTwh6tUUtiawhjhLeuJkY286zXqz~N7MrXuFY-UmaRZ2sTEB-iiw8Lx0Yyg__'
              }
              fill
              alt="Ambiente acolhedor"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="lg:px-10">
            <h1 className="text-[32px]  text-[#8F7D5E] font-semibold ">
              Um refúgio acolhedor
            </h1>
            <span className="md:text-justify text-[#4D4D4D] font-normal ">
              Imagine um lugar onde você se sente acolhida, onde cada detalhe
              foi pensado para proporcionar uma experiência memorável. Um
              ambiente elegante e sofisticado, onde a atenção aos detalhes e a
              excelência em cada procedimento garantem resultados impecáveis e
              experiências únicas.
            </span>
          </div>
          <div className="h-[190px] lg:h-[640px] relative">
            <Image
              fill
              src={
                'https://s3-alpha-sig.figma.com/img/a28b/6b73/3d05ee75131ca231c0881398a0ef385e?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VRVpgcaqr5J0ywb-Ir57Lo3GTmAF7J6TaQeLYWHQ11XE95-0iFp10mfHgLF2MkmJ45uSiOTRc6cStODm5ArbK80-J1Pev1YZ5OZ68rd2qL1WmGw86oq3mjTQ7Ait4stxtc8e0ql2K27t8L6uB0O8bhSaGDc6LW4wMzeV7XyGIQA~oidLF8B9X0OmK5yRDDCiTb3yFqWyTwHEj8NHEOVCYHYwtdtgbsqW5tfP7GLLVXdNnLr7Cv0LP1a2kGJcg1nud8iWNp~D8Ak7mlkDolC1hVjlGfzFi~ty86bk835F3pMdV2r80ww-oAPpGtqz-zCAWarXtWUW~hUYs6eglHxzQA__'
              }
              alt="Ambiente acolhedor"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="lg:px-10">
            <h1 className="text-[32px]  text-[#8F7D5E] font-semibold ">
              Nossa missão: Encantar você
            </h1>
            <span className="md:text-justify text-[#4D4D4D] font-normal ">
              Na Clínica Dra. Stéphanie Angelo, cada paciente é único.
              Acreditamos que a estética deve ser personalizada, feita com amor
              e carinho, para que você se sinta linda e confiante por dentro e
              por fora. Nossa missão é elevar sua autoestima, proporcionando um
              ambiente acolhedor e elegante, onde a atenção aos detalhes e a
              excelência em cada procedimento garantem resultados impecáveis e
              experiências memoráveis.
            </span>
          </div>
          <div className="h-[190px] lg:h-[640px] relative">
            <Image
              fill
              src={
                'https://s3-alpha-sig.figma.com/img/3b24/523f/f0e00401307e3ec31ad3634a2e3451eb?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=on6dLRCrTAVK4duOneRf2A29a8drZkZ7cU36RVM7ogLQYoLySkGPqpGeFdTTz6ZjGL4hLEsqlHep4KnRghUl0Rs96ULzoLEISmZXH98Xr8vg4gWFoo9tSrpdb~0GFHhI2ca1VKX1LyBIKvjBrPKfYcawDmdhZ~xY1KRHmmR0hqI6KuNRXtFozxRathLGmFlZsxmvl9rmwGtjaUXKw74jkbFopsSgZmjiCWKFCIQdjQ-0vtrV4lIedyHLVCAk9pRlbUh0fMJtktb~h12UJdgoPcpWQEoML~7TPlEItXQLo2BcmrHSJXaqmYPcmACSDc3rUSdQNlGSikZI1MDYPGMnpw__'
              }
              alt="Ambiente acolhedor"
            />
          </div>
        </div>

        <div className="lg:px-10 flex flex-col gap-5">
          <h1 className="text-[32px]  text-[#8F7D5E] font-semibold ">
            Nossos Valores: A base da nossa paixão
          </h1>
          <ul className="text-[#4D4D4D] text-justify text-lg font-normal">
            {values.map((value, index) => {
              const [key, ...rest] = value.split(': ')
              const description = rest.join(': ')

              return (
                <li key={index}>
                  <strong>{key}:</strong> {description}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="lg:px-10 flex flex-col gap-[30px]">
          <h1 className="text-[32px]  text-[#8F7D5E] font-semibold ">
            Sua jornada começa aqui
          </h1>
          <span className="md:text-justify text-[#4D4D4D] font-normal ">
            Entre em contato conosco hoje mesmo e agende sua consulta. Dê o
            primeiro passo em direção à sua melhor versão!
          </span>
        </div>
        <Link
          href={createWhatsAppLink({
            message:
              'Olá, me encantei com a clínica que vi no site, gostaria de conhecer!',
            phoneNumber: WhatsappNumbersEnum.CLINICA,
          })}
        >
          <Button className="max-w-fit lg:ml-10">Agende seu horário</Button>
        </Link>
      </div>
    </main>
  )
}
