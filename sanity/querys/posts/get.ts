import { groq } from 'next-sanity'

import { client } from '../../lib/client'
import { PostResponse } from '../../@@types/post'

export async function getPost(slug: string): Promise<PostResponse | null> {
  try {
    const query = groq`
      *[_type == 'post' && slug.current == $slug]{
        title,
      description,
      _createdAt,
        body,
     highlight,
  slug,
  keywords,
  "authorName": author->name,
  "authorBio": author->bio,
  mainImage
      }
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
