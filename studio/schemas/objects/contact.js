import React from 'react'

const EmailRender = ({children}) => <span>{children} 📧</span>

export default {
  type: 'object',
  name: 'contact',
  title: 'Contact Form',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subheading',
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },

    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['mailto', 'tel'],
        }),
    },
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title,
        subtitle: 'Contact form section',
      }
    },
  },

  blockEditor: {
    icon: () => '📧',
    render: EmailRender,
  },
}
