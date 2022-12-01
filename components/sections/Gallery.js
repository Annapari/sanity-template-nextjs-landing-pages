import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ImageSection.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'

const builder = imageUrlBuilder(client)

function Gallery(props) {
  const {alt, image} = props

  if (!image) {
    return null
  }

  return (
    <div className={styles.root}>
      <img
        src={builder.image(image).auto('format').width(200).url()}
        className={styles.image}
        alt={alt}
      />
    </div>
  )
}

Gallery.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
}

export default Gallery
