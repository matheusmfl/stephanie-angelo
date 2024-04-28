'use client'
import { useEffect, useState } from 'react'
import { CardsBlog } from './cardsBlog'
import { PostResponse } from '../../../../sanity/@@types/post'
import { urlForImage } from '../../../../sanity/lib/image'
import { CardsBlogSkeleton } from './skeletonCards'

export function RenderCards({ posts }: { posts: PostResponse[] }) {
  const [loading, setLoading] = useState(false)
  const [currentPosts, setCurrentPosts] = useState(posts)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setCurrentPosts(posts)
      setLoading(false)
    }, 500) // 500ms delay
  }, [posts])

  if (loading) {
    return (
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
        {currentPosts &&
          currentPosts.map((post, index) => <CardsBlogSkeleton key={index} />)}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
      {currentPosts &&
        currentPosts.map((post, index) => (
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
  )
}
