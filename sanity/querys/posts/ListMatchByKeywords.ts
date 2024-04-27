import { groq } from 'next-sanity'

import { client } from '../../lib/client'

import { Slug } from '../../@@types/slug'

export type listMatchByKeywords = {
  title: string
  slug: Slug
}

export async function listMatchByKeywords(): Promise<
  listMatchByKeywords[] | null
> {
  try {
    const query = groq`
      *[_type == 'post' && keywords match $keyword] {
        title,
        slug
      }
    `
    const links: listMatchByKeywords[] = await client.fetch(query)

    return links
  } catch (error) {
    console.log(error, 'ERROR AO LISTAR POSTS')
    return null
  }
}
