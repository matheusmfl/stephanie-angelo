'use client'
import Image from 'next/image'
import textLogo from '@/assets/aboutStephanieTxt.svg'
import { Button } from '@/components/ui/button'
import SectionSeeOtherProfessionals from '@/components/professional/SectionSeeOtherProfessionals'
import Link from 'next/link'
import {
  WhatsappNumbersEnum,
  createWhatsAppLink,
} from '@/utils/whatsappLinkGenerator'
import heroStephanie from '../../../public/heroStephanie.jpeg'
import printInsta from '../../../public/printInsta.png'

import { YoutubeCards } from '@/components/YoutubeCards'
import '@/app/stephanie-angelo/teste.css'

const videos = [
  {
    url: 'https://www.youtube.com/watch?v=cWGUqZOVJqg',
    title: 'Depoimento 1 - Clínica Dra. Stéphanie Angelo',
    time: '1:00',
    thumb: 'https://img.youtube.com/vi/cWGUqZOVJqg/maxresdefault.jpg',
  },
  {
    url: 'https://www.youtube.com/watch?v=W6Cj9Rz_F1U',
    title: 'Depoimento 2 - Clínica Dra. Stéphanie Angelo',
    time: '1:30',
    thumb: 'https://img.youtube.com/vi/W6Cj9Rz_F1U/maxresdefault.jpg',
  },
  {
    url: 'https://www.youtube.com/watch?v=Q3XnpoVHhbk',
    title: 'Depoimento 3 - Clínica Dra. Stéphanie Angelo',
    time: '1:41',
    thumb: 'https://img.youtube.com/vi/Q3XnpoVHhbk/maxresdefault.jpg',
  },
  {
    url: 'https://www.youtube.com/watch?v=4h3ZsSdnMU4',
    title: 'Depoimento 4 - Clínica Dra. Stéphanie Angelo',
    time: '1:50',
    thumb: 'https://img.youtube.com/vi/4h3ZsSdnMU4/maxresdefault.jpg',
  },
  {
    url: 'https://www.youtube.com/watch?v=6999TSnnxxc',
    title: 'Depoimento 5 - Clínica Dra. Stéphanie Angelo',
    time: '1:42',
    thumb: 'https://img.youtube.com/vi/6999TSnnxxc/maxresdefault.jpg',
  },
]

const VideoPlayer = ({ videoId }: { videoId: string }) => {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video Player"
      ></iframe>
    </div>
  )
}

export default function Page() {
  return (
    <main className="flex flex-col bg-[#F4F1F0]">
      <div className="relative w-full h-[240px] md:h-[640px]">
        <Image
          src={heroStephanie}
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
              de mais de 1000 pacientes e formou centenas de alunos, que hoje
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
              src={printInsta}
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

        {/* Section de videos */}

        <section className="flex flex-col lg:px-6 gap-6 mt-4 ">
          <h2 className="text-[#8F7D5E] text-2xl font-medium lg:text-[48px]  ">
            Campanha Transformando Vidas
          </h2>
          <div>
            <VideoPlayer videoId="GsEWjiF9Kws" />
          </div>
          <div className="flex gap-5 lg:gap-0 lg:justify-between overflow-x-scroll custom-scrollbar">
            {videos.map((video, index) => {
              return (
                <YoutubeCards
                  thumb={video.thumb}
                  time={video.time}
                  title={video.title}
                  url={video.url}
                  key={index}
                />
              )
            })}
          </div>
        </section>

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

          <div>
            <VideoPlayer videoId="pT44npteue8" />
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
