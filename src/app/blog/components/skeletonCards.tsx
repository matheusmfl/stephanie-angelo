export function CardsBlogSkeleton() {
  return (
    <article className="flex flex-col w-full rounded-sm overflow-hidden border border-[#D2CBBE]">
      <div className="flex flex-col gap-[10px] px-3 py-6 lg:p-10">
        <div className="bg-[#8F7D5E] rounded-[24px] w-fit px-3 py-1 text-sm font-semibold text-white animate-pulse">
          &nbsp;
        </div>

        <h3 className="text-[#4D4D4D] text-xl lg:text-2xl font-semibold line-clamp-2 bg-gray-300 animate-pulse">
          &nbsp;
        </h3>

        <div className="flex flex-col">
          <span className="text-[#4D4D4D] text-base font-normal line-clamp-4 lg:line-clamp-3 bg-gray-300 animate-pulse">
            &nbsp;
          </span>
          <span className="underline text-black text-base font-medium bg-gray-300 animate-pulse">
            &nbsp;
          </span>
        </div>
      </div>

      <div className="h-[300px] relative bg-gray-300 animate-pulse">&nbsp;</div>
    </article>
  )
}
