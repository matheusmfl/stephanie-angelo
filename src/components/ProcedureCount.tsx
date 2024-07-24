'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'
import { Button } from './ui/button'
import Link from 'next/link'
import {
  WhatsappNumbersEnum,
  createWhatsAppLink,
} from '@/utils/whatsappLinkGenerator'

export function ProcedureCount() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div
      className="px-6 lg:px-[120px] py-12 lg:py-16 bg-[#4D4D4D] flex flex-col gap-6"
      ref={ref}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
        <div className="flex flex-col ">
          <span className="text-[40px] font-medium leading-[48px] text-center text-[#E2DBCC]">
            <strong>
              +{isInView ? <CountUp start={0} end={1000} duration={2.75} /> : 0}
            </strong>{' '}
            pacientes
          </span>
        </div>

        <div>
          <span className="text-lg font-normal leading-[27px] text-center text-[#F4F1F0]">
            A confiança de mais de 1000 pacientes nos motiva a continuar
            oferecendo o melhor atendimento sempre. Agende sua consulta e faça
            parte dessa história de sucesso.
          </span>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Link
          href={createWhatsAppLink({
            message:
              'Olá, vim pelo site! Gostaria de agendar um horário para atendimento.',
            phoneNumber: WhatsappNumbersEnum.CLINICA,
          })}
        >
          <Button className="max-w-[280px] text-[#4D4D4D] bg-[#F7F1E7] hover:bg-[#F7F1E7]/90">
            Agende seu horário
          </Button>
        </Link>
      </div>
    </div>
  )
}
