/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xbWKNrXQ6vJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-50">
            404
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Oops! Parece que você se perdeu.
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          A página que você está procurando não existe ou não está mais
          disponível.
        </p>
        <Link
          className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-gray-900 text-gray-50 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
          href="/"
        >
          Voltar à página inicial
        </Link>
      </div>
    </div>
  )
}
