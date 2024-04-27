import { groq } from 'next-sanity'

import { client } from '../../lib/client'
import { PostResponse } from '../../@@types/post'

export async function getPost(slug: string): Promise<PostResponse | null> {
  try {
    const query = groq`
      *[_type == 'post' && slug.current == $slug]
    `
    const post: PostResponse[] = await client.fetch(query, {
      slug,
    })

    return post[0]
  } catch (error) {
    console.log('ERROR AO LISTAR POST: ', error)
    return null
  }
}
