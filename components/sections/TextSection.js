import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSection.module.css'
import Cta from '../Cta'
function TextSection(props) {
  const {heading, label, text, ctas} = props

  return (
    <div className={styles.root}>
      <section className={styles.article}>
        {/* <div className={styles.label}>{label}</div> */}
        <h2 className={styles.heading}>{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
        {ctas && (
          <div className={styles.ctas}>
            {ctas.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
}

export default TextSection
