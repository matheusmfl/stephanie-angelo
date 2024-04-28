import { format } from 'date-fns'
import { getPost } from '../../../../sanity/querys/posts/get'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import { urlForImage } from '../../../../sanity/lib/image'
import { PortableText } from '@portabletext/react'

export default async function Page({
  params,
}: {
  params: {
    slug?: string
  }
}) {
  const post = params.slug && (await getPost(params.slug))
  const data = post && new Date(post._createdAt)
  const dataFormatada =
    data && format(data, "dd 'de' MMMM yyyy", { locale: ptBR })
  console.log(post)
  return post ? (
    <main className="flex bg-[#F4F1F0] flex-col">
      <div className="p-6 lg:py-20 lg:px-32 flex flex-col gap-6">
        <h1 className="text-[#4D4D4D] lg:text-[#1A1A1A] lg:text-4xl text-2xl font-semibold ">
          {post.title}
        </h1>
        <div className="flex flex-col gap-2">
          <span className="text-base text-[#7D7D7D] font-medium ">
            {dataFormatada}
          </span>
          {post.highlight && (
            <div className="bg-[#8F7D5E] rounded-[24px] w-fit px-3 py-1 text-sm font-semibold text-white">
              Destaques
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-[#1A1A1A] text-base font-medium ">
            {post.authorName}
          </h3>
          <span className="text-base text-[#7D7D7D] font-medium ">
            {post.authorBio}
          </span>
        </div>
      </div>

      <article className="flex flex-col">
        <div className="h-[315px] lg:h-[640px] relative">
          <Image
            src={urlForImage(post.mainImage)}
            className="object-cover object-center"
            alt={post.title}
            fill
          />
        </div>

        <div className="py-8 px-6 lg:p-20 flex flex-col gap-5">
          <PortableText
            value={post.body}
            components={{
              block: {
                h1: ({ children }) => (
                  <h1 className="text-3xl text-[#4D4D4D] font-bold leading-9 ">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl text-[#4D4D4D] font-bold leading-8 ">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl text-[#4D4D4D] font-bold leading-6 ">
                    {children}
                  </h3>
                ),

                h4: ({ children }) => (
                  <h4 className="text-lg text-[#4D4D4D] font-bold leading-6 ">
                    {children}
                  </h4>
                ),
                normal: ({ children }) => (
                  <p className="text-base text-[#4D4D4D] font-normal leading-6 lg:px-10 ">
                    {children}
                  </p>
                ),
              },
              listItem: {
                number: ({ children }) => (
                  <li style={{ listStyleType: 'decimal' }}>{children}</li>
                ),
                bullet: ({ children }) => (
                  <li
                    style={{
                      listStyleType: 'disc',
                      marginLeft: '16px',
                    }}
                  >
                    {children}
                  </li>
                ),
              },
              marks: {
                link: ({ value, children }) => (
                  <a
                    href={`${value.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline"
                  >
                    {children}
                  </a>
                ),
              },
              types: {
                image: ({ value }) => (
                  <div className="relative h-[280px] lg:h-[400px]">
                    <Image
                      src={urlForImage(value)}
                      alt={value.alt}
                      className="object-cover object-center"
                      fill
                    />
                  </div>
                ),
              },
            }}
          />
        </div>
      </article>
    </main>
  ) : (
    <div>
      <h1>Post não encontrado</h1>
    </div>
  )
}
