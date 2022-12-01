import {MdLocalDrink} from 'react-icons/md'

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: MdLocalDrink,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },

    {
      name: 'categories',
      title: 'Categories',
      // type: 'string',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'},
        },
      ],
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc, options) => options.parent.title,
        maxLength: 96,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'countInStock',
      title: 'CountInStock',
      type: 'number',
    },
  ],

  preview: {
    select: {
      title: 'title',
      artworkType: 'artwork.title',
      media: 'defaultProductVariant.images[0]',
    },
  },
}

// preview: {
//   select: {
//     slug: 'slug.current',
//     pageTitle: 'name.title',
//   },
//   prepare({slug, nameTitle}) {
//     return {
//       title: slug === '/' ? '/' : `/${slug}`,
//       subtitle: `Product: ${nameTitle}`,
//     }
//   },
// },
