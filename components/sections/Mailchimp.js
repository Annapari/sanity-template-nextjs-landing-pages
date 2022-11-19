import PropTypes from 'prop-types'
import React from 'react'
import MailchimpForm from 'react-mailchimp-form'
import styles from './Mailchimp.module.css'

export default function Mailchimp(props) {
  const {heading, subtitle, actionUrl} = props

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        {actionUrl && (
          <MailchimpForm
            action={actionUrl}
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Your Email ',
                type: 'email',
                className: styles.email,
                required: true,
              },
              {
                name: 'NAME',
                placeholder: 'Your Name',
                type: 'name',
                className: styles.email,
                required: true,
              },
            ]}
            buttonClassName={styles.button}
            styles={{
              sendingMsg: {
                color: '#0652DD',
              },
              successMsg: {
                color: '#009432',
              },
              duplicateMsg: {
                color: '#EE5A24',
              },
              errorMsg: {
                color: 'red',
              },
            }}
            messages={{
              sending: 'Sending...',
              success: 'Thank you for joining the Collectors Club !',
              error: 'An unexpected internal error has occurred.',
              empty: 'You must write a valid input.',
              duplicate: 'Already subscribed',
              button: 'Join the club!',
            }}
            className={styles.form}
          />
        )}
      </div>
    </section>
  )
}

Mailchimp.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string,
}
