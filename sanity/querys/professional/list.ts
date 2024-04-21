import { groq } from 'next-sanity'
import { ProfessionalResponse } from '../../@@types/Professional'
import { client } from '../../lib/client'

export async function listProfessional(): Promise<
  ProfessionalResponse[] | null
> {
  try {
    const query = groq`
      *[_type == 'professional'] {
        _id,
        name,
        bio,
        slug,
        mainImage,
        link,
        body
      }
    `
    const professionals: ProfessionalResponse[] = await client.fetch(query)
    console.log(professionals)

    return professionals
  } catch (error) {
    console.log(error, 'ERROR AO LISTAR PROFISSIONAIS')
    return null
  }
}
