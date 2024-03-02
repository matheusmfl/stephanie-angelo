import { ClinicSpecializations } from '@/components/ClinicSpecializations'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <ClinicSpecializations />
    </div>
  )
}
