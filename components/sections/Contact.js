import React, {useState} from 'react'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'

const ContactPage = () => {
  const [submitterName, setSubmitterName] = useState('')
  const router = useRouter()
  const confirmationScreenVisible = router.query?.success && router.query.success === 'true'
  const formVisible = !confirmationScreenVisible

  const ConfirmationMessage = (
    <React.Fragment>
      <p>Thank you for submitting this form. </p>

      <button onClick={() => router.replace('/contact', undefined, {shallow: true})}>
        {' '}
        Submit Another Response{' '}
      </button>
    </React.Fragment>
  )

  const ContactForm = (
    <form name="contact-form" method="POST" action="contact/?success=true">
      <label htmlFor="firstName">First Name *</label>
      <input id="firstname" name="firstName" required type="text" />
      <label htmlFor="lastName">Last Name *</label>
      <input id="lastname" name="lastName" required type="text" />

      <label htmlFor="email">E-mail Address *</label>
      <input id="email" type="email" name="email" required />
      <label htmlFor="message">Message *</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  )

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        {/* <h1>Contact Us</h1> */}
        {formVisible ? ContactForm : ConfirmationMessage}
      </div>
    </section>
  )
}
Contact.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string,
}
export default ContactPage
