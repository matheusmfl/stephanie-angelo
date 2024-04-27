import { groq } from 'next-sanity'

import { client } from '../../lib/client'
import { PostResponse } from '../../@@types/post'

export async function getHighlightPost(
  highlight: boolean,
): Promise<PostResponse | null> {
  try {
    const query = groq`
      *[_type == 'post' && highlight == $slug]
    `
    const post: PostResponse[] = await client.fetch(query, {
      highlight,
    })

    return post[0]
  } catch (error) {
    console.log('ERROR AO BUSCAR POST POR HIGHLIGHT: ', error)
    return null
  }
}
