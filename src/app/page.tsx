import { AboutStephanie } from '@/components/AboutStephanie'
import { ClinicLocation } from '@/components/ClinicLocation'
import { ClinicSpecializations } from '@/components/ClinicSpecializations'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ProcedureCount } from '@/components/ProcedureCount'
import { TeamIntroduction } from '@/components/TeamIntroduction'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <ClinicSpecializations />
      <AboutStephanie />
      <ClinicLocation />
      <ProcedureCount />
      <TeamIntroduction />
    </div>
  )
}
