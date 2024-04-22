import { Button } from '@/components/ui/button'
import Image from 'next/image'

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
              Clínica Dra. Stéphanie Angelo
            </h1>
            <span className="md:text-justify text-[#4D4D4D] font-normal ">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
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
              Espaço acolhedor
            </h1>
            <span className="md:text-justify text-[#4D4D4D] font-normal ">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
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
              Sinta a experiência
            </h1>
            <span className="md:text-justify text-[#4D4D4D] font-normal ">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
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
        <Button className="max-w-fit">Agende seu horário</Button>
      </div>
    </main>
  )
}
