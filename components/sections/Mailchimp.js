import PropTypes from 'prop-types'
import React from 'react'
import MailchimpForm from 'react-mailchimp-form'
import styles from './Mailchimp.module.css'

export default function Mailchimp(props) {
  const {heading, subtitle, actionUrl} = props
  //
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <form
          target="_blank"
          action="https://formsubmit.co/aphi211@mywhitecliffe.com"
          // action="https://formsubmit.co/el/pojije"
          method="POST"
          className={styles.form}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            title="Enter your name here"
            className={styles.email}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            title="Enter your email address here"
            className={styles.email}
            required
          ></input>
          <input
            type="hidden"
            name="_autoresponse"
            value="Thanks for signing up to the Collector's Club on Kate Vox's Fine Art Website! if you'd like to unsubscribe at any time, please send me a message: Katevoxtime@gmail.com. Kate x"
          ></input>
          <button type="submit" className={styles.button}>
            Submit Form
          </button>
        </form>
        {/* 
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
                title: 'Your name',
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
        )} */}
      </div>
    </section>
  )
}

Mailchimp.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string,
}
