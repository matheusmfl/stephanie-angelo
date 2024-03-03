'use client'
// import { useAnimation, useInView, motion } from 'framer-motion'
// import { useEffect, useRef } from 'react'

export function ProcedureCount() {
  // const ref = useRef(null)
  // const isInView = useInView(ref)
  // const controls = useAnimation()

  // const animationConfig = {
  //   start: 0,
  //   end: 800,
  //   duration: 2,
  // }

  // useEffect(() => {
  //   if (isInView) {
  //     controls.start({
  //       opacity: 1,
  //       x: animationConfig.end,
  //       transition: { duration: animationConfig.duration },
  //     })
  //   }
  // }, [controls, isInView])

  return (
    <div className="px-6 lg:px-[120px] py-12 lg:py-16 bg-[#8F7D5E] flex flex-col gap-6">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
        <div className="flex flex-col ">
          {/* <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
            {isInView ? animationConfig.end.toFixed(0) : 0}
          </motion.div> */}
          <span className="text-[40px] font-medium leading-[48px] text-center text-[#E2DBCC]">
            <strong>+ de 800</strong> clientes
          </span>
          <span className="text-[40px] font-medium leading-[48px] text-center text-[#E2DBCC]">
            <strong>+ de 5.000</strong> procedimentos realizados
          </span>
        </div>

        <div>
          <span className="text-lg font-normal leading-[27px] text-center text-[#F4F1F0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </span>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="text-base leading-[24px] h-[48px] max-w-[280px] font-medium border border-[#BAB09B] rounded-sm text-[#4D4D4D] bg-[#F7F1E7] w-full py-3 px-12 ">
          Agende seu horário
        </button>
      </div>
    </div>
  )
}
