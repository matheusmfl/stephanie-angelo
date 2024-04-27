import { BaseSchema } from './base'
import { Slug } from './slug'

export type Author = BaseSchema & {
  bio: string
  slug: Slug
  _rev: string
  _type: string
  name: string
}
