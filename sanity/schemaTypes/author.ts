import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author do post',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome do profissional',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug / (Gera automaticamente, só clickar no botão Generate)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'bio',
      title: 'Bio / Ex: Pós graduada em biomedicina',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
