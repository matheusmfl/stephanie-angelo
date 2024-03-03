import aboutCourses from '@/assets/about-courses.jpg'
import Image from 'next/image'

export function AboutCourses() {
  return (
    <div className="grid grid-cols-2 bg-slate-50">
      <div className="relative h-[720px]">
        <Image
          fill={true}
          placeholder="blur"
          src={aboutCourses}
          className="object-cover"
          alt="Sobre nossos cursos"
        />
      </div>
      <div className="px-20 h-full flex flex-col justify-center gap-6">
        <h2 className="text-[48px] font-normal leading-[58px] text-[#4D4D4D]">
          Cursos ministrados por nossa clínica
        </h2>

        <span className="text-[18px] font-normal leading-[27px] text-[#4D4D4D]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </span>

        <button className="text-base leading-[22px] text-center h-[48px] max-w-[450px] font-medium border border-[#BAB09B] rounded-sm text-[#F7F1E7] bg-button w-full py-3 px-10 ">
          Confira a agenda para próximos cursos
        </button>
      </div>
    </div>
  )
}
