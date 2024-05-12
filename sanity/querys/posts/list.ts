import { groq } from 'next-sanity'

import { client } from '../../lib/client'
import { PostResponse } from '../../@@types/post'

interface paginationPost {
  posts: PostResponse[] | null
  total?: number
}
interface CountResult {
  count: number
}

export async function listPost(page: number): Promise<paginationPost> {
  try {
    const queryCount = groq`*[_type=='post'][0]{
      "count": count(*[_type=='post' && highlight == false])
    }`
    const query = groq`
      *[_type == 'post' && highlight == false] | order(_createdAt) [($page - 1) * 2 ... $page * 2] {
        _id,
        _createdAt,
        mainImage,
        author,
        description,
        body,
        title,
        slug,
      }
    `
    const totalResult: CountResult = await client.fetch(queryCount)
    const total = totalResult.count
    const posts: PostResponse[] = await client.fetch(query, { page })

    return { total, posts }
  } catch (error) {
    console.log(error, 'ERROR AO LISTAR POSTS')
    return {
      posts: null,
    }
  }
}
