export function Hero() {
  return (
    <main className="h-[680px] flex flex-col bg-hero bg-cover bg-no-repeat justify-center px-20  ">
      <div className="rounded-[8px] shadow-default px-8 py-10 flex flex-col gap-6 w-[530px] bg-[#F4F1F0C4]">
        <h2 className="font-medium text-[40px] leading-[48px] text-[#4D4D4D]">
          Medium length hero headline goes here
        </h2>

        <p className="text-[#4D4D4D] text-[20px] leading-[30px] font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus.
        </p>

        <button className="text-base leading-[24px] h-[48px] max-w-[280px] font-medium border border-[#BAB09B] rounded-sm text-[#F7F1E7] bg-button w-full py-3 px-12 ">
          Agende seu horário
        </button>
      </div>
    </main>
  )
}
