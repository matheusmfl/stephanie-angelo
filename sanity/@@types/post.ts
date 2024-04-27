import { PortableTextBlock } from '@portabletext/react'
import { BaseSchema } from './base'
import { Slug } from './slug'
import { Author } from './author'
import { mainImage } from './mainImage'

export type PostResponse = BaseSchema & {
  _rev: string
  description: string
  body: PortableTextBlock[]
  title: string
  highlight: boolean
  slug: Slug
  keywords: string[]
  author: Author
  mainImage: mainImage
  count?: number
}
