import { PortableTextBlock } from 'sanity'
import { link } from './link'
import { mainImage } from './mainImage'
import { Slug } from './slug'

export interface ProfessionalResponse {
  body: PortableTextBlock[]
  _id: string
  name: string
  slug: Slug
  bio: string
  mainImage: mainImage
  link: link[]
}
