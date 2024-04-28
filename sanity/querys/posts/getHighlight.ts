import { groq } from 'next-sanity'

import { client } from '../../lib/client'
import { PostResponse } from '../../@@types/post'

export async function getHighlightPost(): Promise<PostResponse | null> {
  try {
    const query = groq`
      *[_type == 'post' && highlight == true]
    `
    const post: PostResponse[] = await client.fetch(query)

    return post[0]
  } catch (error) {
    console.log('ERROR AO BUSCAR POST POR HIGHLIGHT: ', error)
    return null
  }
}
