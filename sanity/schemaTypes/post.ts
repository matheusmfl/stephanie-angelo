import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title:
        'Slug / Gera automaticamente após preencher o título, só clicar no botão generate ( Não pode esquecer esse passo )',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
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
          title:
            'Texto alternativo/descritivo para leitor de tela e para quando imagem não carregar.',
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Descrição/Resumo ( Pequeno texto sobre o que aborda o post )',
      type: 'string',
    }),
    defineField({
      name: 'categories',
      title:
        'Categorias / ( Hoje o projeto não usa isso, mas deixamos aqui para futuros upgrade )',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),

    defineField({
      name: 'keywords',
      title:
        'Palavras-chave / Digite palavras chaves e aperte enter, isso vai ajudar o usuário a encontrar o post pela ferramenta de buscar artigos',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      title:
        'Post em destaque ? ( MUITO IMPORTANTE NÃO EXISTIR 2 ARTIGOS EM DESTAQUE, SO PODE 1 )',
      name: 'highlight',
      type: 'boolean',
    }),
    defineField({
      name: 'publishedAt',
      title:
        'Data de publicação ( Se não preencher, pega a data atual automaticamente )',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo do post',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
