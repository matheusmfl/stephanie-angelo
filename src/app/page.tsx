import { AboutCourses } from '@/components/AboutCourses'
import { AboutStephanie } from '@/components/AboutStephanie'
import { ClinicLocation } from '@/components/ClinicLocation'
import { ClinicSpecializations } from '@/components/ClinicSpecializations'
import { CoursesTimeline } from '@/components/CoursesTimeline'
import { Depositions } from '@/components/Depositions'
import { FormContact } from '@/components/FormContact'

import { Hero } from '@/components/Hero'
import { ProcedureCount } from '@/components/ProcedureCount'

import { TeamIntroduction } from '@/components/TeamIntroduction'

export default function Home() {

  return (
    <div className="overflow-x-hidden">
      <Hero />
      {/* <ClinicSpecializations /> */}
      <AboutStephanie />
      <ClinicLocation />
      <ProcedureCount />
      <TeamIntroduction />
      <AboutCourses />
      <Depositions />
      <CoursesTimeline />
      <FormContact />
    </div>
  )
}
