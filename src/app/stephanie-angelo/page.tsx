import Image from 'next/image'
import textLogo from '@/assets/aboutStephanieTxt.svg'
import { Button } from '@/components/ui/button'
import SectionSeeOtherProfessionals from '@/components/professional/SectionSeeOtherProfessionals'
import Link from 'next/link'
import {
  WhatsappNumbersEnum,
  createWhatsAppLink,
} from '@/utils/whatsappLinkGenerator'

export default async function Page() {
  return (
    <main className="flex flex-col bg-[#F4F1F0]">
      <div className="relative w-full h-[240px] md:h-[640px]">
        <Image
          src={
            'https://s3-alpha-sig.figma.com/img/b3f3/9219/7e2731ba0a64f67b6e50843278464108?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XT26meB7~V2TlXIcLs69udu6vhoSOfyTBOjV5Xca2B~x-AtXwmLgwt0wA51UM4oktRjb4XdqOPQ79rq7oA-Puj0nz9caBCLlkHq6p0BrEBhI-D-9~oHzpPm1y804T3Lz9XJ9GQBBU0jXL2e4G-T6BKq02AofoZaosfXJDDpUzN5f6yEFoVhAITzWq8-RLok8ulmvXIa6ctRqHFUcjqWbBGt4XlkiGsd-m83RNkNt7OiRsE0KR6uKrgDvJpEfvDRVboT9L64laUgkKEJcY5PEjhRiANJn8oqgJJYgoIx~iZNeXoeSVJNR8P9odh9huN2D4B-msL6JxoCg28~5erLqzg__'
          }
          fill
          className="object-cover"
          alt="Stephanie"
        />
      </div>
      <section className="p-6 flex flex-col lg:pt-20 lg:pb-0 lg:px-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 lg:px-10 ">
            <Image src={textLogo} alt="Stephanie Logo" />
            <span className="text-[#4D4D4D] text-lg font-normal">
              Dra Stéphanie Angelo é biomédica, especialista em harmonização
              facial, com residência internacional na área e diretora da clínica
              que carrega seu nome. Ao longo destes anos, já elevou a autoestima
              de mais de 800 pacientes e formou centenas de alunos, que hoje
              alcançam resultados excelentes empregando as técnicas da doutora.{' '}
              <br /> <br />
              Por ser uma amante do estudo e do conhecimento, já realizou mais
              de 50 cursos nacionais e internacionais, todos voltados ao estudo
              da harmonização e anatomia facial, e, por isso, entrega resultados
              seguros e eficazes. <br /> <br /> Apaixonada por ver o brilho nos
              olhos dos pacientes que se sentem mais felizes com a melhoria em
              suas faces, tem o propósito de fazer com que seus pacientes gostem
              do que vêem no espelho e tenham autoconfiança. A Dra. Stéphanie é
              conhecida pelo carinho e dedicação que entrega em seus
              atendimentos.
            </span>
          </div>
          {/* Div com imagem da stephanie no instagram */}
          <div className="flex relative w-full h-[352px] lg:h-[780px] flex-col gap-6">
            <Image
              src={
                'https://s3-alpha-sig.figma.com/img/7b7b/d508/9564abc28cad04634dde8e968e2615ac?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wgjt4vIfeyFDkPUv7YQBkoaIboiIC2nNhraO-F~tF2GU0lJQPBE2x88Ipu4ZfDmBwZv2qNpbuU8pp5ktp6icmaqPHWOCzqpvGgd7xjcJSTQlrhymL9-9BvBouh8~J7opFcHCmPdRT6Z4FKLoXnCKECmiUtD3g7262XcVit1tSliz1P061ze-Ta1NOc7DxxkJmUL0RD0yfcaNLR3eV3q3iQWe6hNZgNkkzzEM53b2p6p88JElTCgtBGC07wyAzYSfhULoB6DXvn0zyNrsj-miRWrGROKnQNxZF3ZE2I7p-LDBq5zHiinYYEzrVCPpdiKatFTmtwAak7Zt9IrBMKpmgg__'
              }
              fill
              className="md:object-cover object-contain object-center"
              quality={100}
              alt="foto do instagram"
            />
          </div>
          {/* Div que vem abaixo dessa com botão e texto */}
          <div className="flex flex-col lg:px-6 gap-6">
            <span className="hidden lg:block text-[#4D4D4D] text-lg ">
              Leia mais sobre a história de sucesso da Dra. Stéphanie Angelo no
              seu perfil do Instagram clicando no botão abaixo.
            </span>
            <Link
              href={'https://www.instagram.com/dra.stephanieangelo/'}
              target="_blank"
            >
              <Button className="w-fit bg-[#4D4D4D] hover:bg-[#4D4D4D]/90 text-[#F7F1E7]">
                Veja no instagram
              </Button>
            </Link>
          </div>
        </div>

        {/* Segunda Sessão com foto no podcast */}
        <section className="flex flex-col gap-6 mt-10">
          <div className="lg:px-4 flex flex-col gap-6 ">
            <h2 className="text-[#8F7D5E] text-2xl font-medium lg:text-[48px]  ">
              Posicionamento e filosofia de vida
            </h2>
            <span className="text-base text-[#4D4D4D]">
              Conheça um pouco mais da trajetória pessoal e profissional da Dra.
              Stéphanie Angelo na entrevista do PodBeauty, o podcast de beleza
              mais conceituado do Brasil.
            </span>
          </div>

          <div className="relative h-[200px] lg:h-[675px]">
            <Image
              src={
                'https://s3-alpha-sig.figma.com/img/1cdd/964b/641265d07451efa1ec9e964f609b7ea7?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SVOdqMdBgLNHTHfALy~lfU8PRFpbF4Ddf0h2jvMJJkgY1UUQMUynObc1GH2V0JezNbPa4IaqoorA5RQ~cmKmG-Q1aEIWwRUq3gDe7UQvtsaPbtVLLrVpWjipaFpFeEUvh26dNFejP9asx74a9FQhyFiyPUpPfRXjPK2w-JRtmLLcjEsGMLmDSoYSE9DckfpxsT4dCjx8dIdPNUI1XadGrdB64Zxspy~jKBWQL3zLSLwYmQrCXF4o4ESd9Khcw7CJgLvn2dZ8UZFw-FufhR3UdJty7DU1E1Uc-s~C3YZWtsoMO1T7CdsZH~kcPep0DK-uP6pIu7~4PXIVGsRlNXUDjQ__'
              }
              fill
              className="md:object-cover object-contain object-center"
              alt="PodCast Photo"
            />
          </div>
          <Link
            href={createWhatsAppLink({
              message:
                'Olá, vim pelo site! Gostaria de agendar um horário com a Dra. Stéphanie',
              phoneNumber: WhatsappNumbersEnum.CLINICA,
            })}
          >
            <Button className="w-fit lg:ml-4 bg-[#4D4D4D] hover:bg-[#4D4D4D]/90 text-[#F7F1E7]">
              Agende seu horário
            </Button>
          </Link>
        </section>
      </section>

      <SectionSeeOtherProfessionals hasPadding={true} />
    </main>
  )
}
