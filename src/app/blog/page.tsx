import { getHighlightPost } from '../../../sanity/querys/posts/getHighlight'
import { HighlightBlogComponent } from './components/highlightBlogComponent'
import { urlForImage } from '../../../sanity/lib/image'
import { listPost } from '../../../sanity/querys/posts/list'
import { CardsBlog } from './components/cardsBlog'

export default async function Page() {
  const highlight = await getHighlightPost()
  const posts = await listPost(1)
  return (
    <main className="flex flex-col bg-[#F4F1F0]">
      <div className="px-6 lg:p-20 py-6 flex flex-col items-center gap-5">
        <h3 className="text-[#8F7D5E] text-center text-base lg:text-[24px] font-medium ">
          ENCONTRE SUA AUTOESTIMA AQUI
        </h3>
        <span className="text-center text-[#4D4D4D] lg:leading-10 text-2xl lg:text-[40px] font-semibold ">
          O blog dedicado a todas as mulheres <br className="hidden lg:block" />{' '}
          que desejam se sentir lindas e <br className="hidden lg:block" />{' '}
          confiantes.
        </span>
        <input type="text" />
      </div>
      <div className="lg:px-32">
        {highlight && (
          <HighlightBlogComponent
            createdAt={highlight?._createdAt}
            description={highlight?.description}
            imageUrl={urlForImage(highlight?.mainImage)}
            title={highlight?.title}
            slug={highlight?.slug.current}
          />
        )}
      </div>

      <div className="px-6 py-10 lg:py-20 lg:px-32 flex flex-col gap-5 lg:gap-10">
        <h4 className="text-[#4D4D4D] text-2xl lg:text-[40px] font-semibold">
          Leia também
        </h4>

        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
          {posts &&
            posts.map((post, index) => (
              <CardsBlog
                createdAt={post?._createdAt}
                slug={post?.slug.current}
                title={post?.title}
                description={post?.description}
                imageUrl={urlForImage(post?.mainImage)}
                key={index}
              />
            ))}
        </div>
      </div>
    </main>
  )
}
