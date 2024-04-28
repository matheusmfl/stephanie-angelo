'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export function Pagination({ total }: { total: number }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const currentPage = Number(searchParams.get('page')) || 1
  const totalPages = Math.ceil(total / 2)

  function handlePageChange(page: number) {
    const params = new URLSearchParams(searchParams)
    params.set('page', String(page))
    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    })
  }

  return (
    <nav>
      <ul className="flex items-center justify-center space-x-4">
        <li className="hover:bg-none bg-none">
          <button
            onClick={
              currentPage !== 1
                ? () => handlePageChange(currentPage - 1)
                : undefined
            }
            className={
              currentPage !== totalPages
                ? 'cursor-not-allowed flex items-center'
                : 'cursor-pointer flex items-center'
            }
          >
            <ChevronLeft />
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <button
              onClick={() => handlePageChange(page)}
              className={`cursor-pointer flex w-10 h-10 justify-center items-center ${page === currentPage ? 'bg-[#8F7D5E] text-[#F4F1F0] text-lg rounded-md font-semibold leading-[150%]' : ''}`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={
              currentPage !== totalPages
                ? () => handlePageChange(currentPage + 1)
                : undefined
            }
            className={
              currentPage === totalPages
                ? 'cursor-not-allowed flex items-center'
                : 'cursor-pointer flex items-center'
            }
          >
            <ChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  )
}
