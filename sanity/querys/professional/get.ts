import { groq } from 'next-sanity'
import { ProfessionalResponse } from '../../@@types/Professional'
import { client } from '../../lib/client'

export async function getProfessional(
  slug: string,
): Promise<ProfessionalResponse | null> {
  try {
    const query = groq`
      *[_type == 'professional' && slug.current == $slug] {
        _id,
        bio,
        name,
        slug,
        mainImage,
        link,
        body
      }
    `
    const professional: ProfessionalResponse[] = await client.fetch(query, {
      slug,
    })

    return professional[0]
  } catch (error) {
    console.log('ERROR AO LISTAR PROFISSIONAL: ', error)
    return null
  }
}
