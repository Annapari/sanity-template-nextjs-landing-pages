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
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },

    {
      name: 'categories',
      title: 'Categories',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
