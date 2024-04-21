import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'professional',
  title: 'Profissional',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome do profissional',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio resumida / Vai aparecer no pequeno card de profissionais.',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title:
        'Slug / Gera automaticamente / Link para acessar página do profissional',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'mainImage',
      title: 'Imagem principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo ex:. Doutor(a) Fulano(a)',
        },
      ],
    }),
    defineField({
      name: 'link',
      title: 'Link do botão',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'message',
              type: 'string',
              title: 'Mensagem',
              options: {
                nullable: true,
              },
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              options: {
                nullable: true,
              },
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'body',
      title: 'Bio do profissional',
      type: 'blockContent',
    }),
  ],
})
