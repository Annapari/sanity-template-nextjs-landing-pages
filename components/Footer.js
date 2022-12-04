import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import styles from './Footer.module.css'
import SimpleBlockContent from './SimpleBlockContent'
import {getPathFromSlug, slugParamToPath} from '../utils/urls'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Footer(props) {
  const {navItems, router, text} = props
  return (
    <div className={styles.root}>
      <div className={styles.footerContainer}>
        <nav>
          <ul className={styles.items}>
            {navItems &&
              navItems.map((item) => {
                const isActive = slugParamToPath(router.query.slug) === item.slug.current
                return (
                  <li key={item._id} className={styles.item}>
                    <Link href={getPathFromSlug(item.slug.current)}>
                      <a data-is-active={isActive ? 'true' : 'false'} aria-current={isActive}>
                        {item.title}
                      </a>
                    </Link>
                  </li>
                )
              })}
          </ul>

          <div className={styles.list_item_social}>
            <ul>
              <Link
                href="https://www.facebook.com/kate.voxtime/"
                class="contact-icon"
                rel="noopener noreferrer"
                target="NEXT_PUBLIC_blank"
              >
                <li title="Follow me on Facebook" alt="Follow me on Facebook" target="_blank">
                  <a
                    // href="https://www.facebook.com/kate.voxtime/"

                    class="contact-icon"
                    // target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </a>
                </li>
              </Link>

              <Link
                href="https://www.instagram.com/katevox_fineart/"
                class="contact-icon"
                rel="noopener noreferrer"
                target="NEXT_PUBLIC_blank"
              >
                <li title="Follow me on Instagram" alt="Follow me on Instagram">
                  <a
                    class="contact-icon"
                    // target="_blank"
                    // rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </a>
                </li>
              </Link>
              <Link
                href="mailto:KateVoxTime@gmail.com?subject=Email from Website"
                alt="Send me an email"
              >
                <li className={styles.list_item}>
                  <span className={styles.contact_email}>
                    <a
                      // href="mailto:KateVoxTime@gmail.com?subject=Email from Website"
                      title="Send me an email"
                      type="email"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </a>
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
      <div className={styles.text}>
        <SimpleBlockContent blocks={text} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  text: PropTypes.arrayOf(PropTypes.object),
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
  logo: PropTypes.shape({
    asset: PropTypes.shape({
      url: PropTypes.string,
    }),
    logo: PropTypes.string,
  }),
}

export default withRouter(Footer)
