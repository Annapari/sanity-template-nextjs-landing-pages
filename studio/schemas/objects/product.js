export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
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

        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          options: {
            source: 'name',
            maxLength: 96,
          },
        },
        {
          name: 'size',
          title: 'Size',
          type: 'string',
        },
        {
          name: 'category',
          title: 'Category',
          type: 'string',
        },

        {
          name: 'countInStock',
          title: 'CountInStock',
          type: 'number',
        },
      ],
    },
  ],
}

// export default {
//   name: 'product',
//   title: 'Product',
//   type: 'object',
//   fields: [
//     {
//       name: 'images',
//       type: 'array',
//       title: 'Images',
//       of: [
//         {
//           name: 'image',
//           title: 'Image',
//           type: 'image',
//           options: {
//             hotspot: true,
//           },
//           fields: [
//             {
//               name: 'alt',
//               type: 'string',
//               title: 'Alternative text',
//             },

//             {
//               name: 'name',
//               title: 'Artwork Name',
//               type: 'string',
//             },
//             {
//               name: 'price',
//               title: 'Price',
//               type: 'number',
//             },

//             {
//               name: 'description',
//               title: 'Description',
//               type: 'string',
//             },
//             {
//               name: 'slug',
//               title: 'Slug',
//               type: 'slug',
//               options: {
//                 source: 'name',
//                 maxLength: 96,
//               },
//             },
//             {
//               name: 'format',
//               title: 'Format',
//               type: 'string',
//             },
//             {
//               name: 'size',
//               title: 'Size',
//               type: 'string',
//             },
//             {
//               title: 'dateAdded',
//               name: 'DateAdded',
//               type: 'datetime',
//             },
//             {
//               name: 'countInStock',
//               title: 'CountInStock',
//               type: 'number',
//             },
//           ],
//         },
//       ],
//       options: {
//         layout: 'grid',
//       },
//     },
//     {
//       name: 'display',
//       type: 'string',
//       title: 'Display as',
//       description: 'How should we display these images?',
//       options: {
//         list: [
//           {title: 'Stacked on top of eachother', value: 'stacked'},
//           {title: 'In-line', value: 'inline'},
//           {title: 'Carousel', value: 'carousel'},
//         ],
//         layout: 'radio', // <-- defaults to 'dropdown'
//       },
//     },
//     {
//       name: 'zoom',
//       type: 'boolean',
//       title: 'Zoom enabled',
//       description: 'Should we enable zooming of images?',
//     },
//   ],
//   preview: {
//     select: {
//       images: 'images',
//       image: 'images.0',
//     },
//     prepare(selection) {
//       const {images, image} = selection

//       return {
//         title: `Gallery block of ${Object.keys(images).length} images`,
//         subtitle: `Alt text: ${image.alt}`,
//         media: image,
//       }
//     },
//   },
// ]
