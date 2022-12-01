import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Product.module.css'
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

// const {
//   product: {image, name, slug, price},
// } = props

function Product(props) {
  const [count, setCount] = useState(1)
  const handleCount = (value) => (!(count === 0 && value === -1) ? setCount(count + value) : count)
  const {
    product,
    heading,
    label,
    text,
    subtitle,
    image,
    title,
    description,
    size,
    price,
    categories,
    countInStock,
    slug,
  } = props

  const addToCartHandler = () => {
    dispatch(add(product))
  }
  // if (!image) {
  //   return null
  // }
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {/* <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.grid}> */}
        <Link href={`/product/${slug.current}`}>
          <div className={styles.productcard}>
            <p className={styles.title}>{title}</p>
            <div className={styles.productDetail}>
              <img
                src={builder.image(image).auto('format').width(200).url()}
                className={styles.image}
                alt={heading}
                // src={urlFor(image).width(200).url()}
              />
              <div className={styles.productDetails}>
                <p className={styles.description}>{description}</p>

                <p className={styles.size}>Size: {size}</p>
                <p className={styles.countInStock}>{countInStock} Available</p>
                <p className={styles.price}>${price}</p>
              </div>
              <div className={styles.counter}>
                <button onClick={() => handleCount(-1)} className={styles.buttonCount}>
                  -
                </button>
                <span className={styles.description}>{count}</span>
                <button onClick={() => handleCount(1)} className={styles.buttonCount}>
                  +
                </button>

                <div className={styles.Button}>
                  <button onClick={addToCartHandler} className={styles.buttonAdd}>
                    Add to Selection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
    // </div>
  )
}
Product.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  // countInStock: PropTypes.array,

  image: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
}

export default Product

//

//     return (
//       <div className={styles.root}>
//         <div className={styles.container}>
//           <h2 className={styles.heading}>{heading}</h2>
//           <Layout>
//             {loading ? (
//               <CircularProgress />
//             ) : error ? (
//               <Alert variant="danger">{error}</Alert>
//             ) : (
//               <Grid container spacing={3}>
//                 {products.map((product) => (
//                   <Grid item md={4} key={product.slug}>
//                     <ProductItem
//                       product={product}
//                       addToCartHandler={addToCartHandler}
//                     ></ProductItem>
//                   </Grid>
//                 ))}
//               </Grid>
//             )}
//           </Layout>
//         </div>
//       </div>
//     )
//   }
//   ProductPage.propTypes = {
//     heading: PropTypes.string,
//     label: PropTypes.string,
//     text: PropTypes.array,
//     image: PropTypes.shape({
//       asset: PropTypes.shape({
//         _ref: PropTypes.string,
//       }),
//     }),
//   }
// }
// export default ProductPage
