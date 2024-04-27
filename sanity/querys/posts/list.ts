import { groq } from 'next-sanity'

import { client } from '../../lib/client'
import { PostResponse } from '../../@@types/post'

export async function listPost(
  page: number,
): Promise<Partial<PostResponse[]> | null> {
  try {
    const query = groq`
      *[_type == 'post' && highlight == false] | order(_createdAt) [($page - 1) * 4 ... $page * 4] {
        _id,
        _createdAt,
        mainImage,
        author,
        description,
        body,
        title,
        slug
      }
    `
    const posts: Partial<PostResponse[]> = await client.fetch(query, { page })

    return posts
  } catch (error) {
    console.log(error, 'ERROR AO LISTAR POSTS')
    return null
  }
}
