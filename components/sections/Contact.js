import React, {useState} from 'react'
import styles from './Contact.module.css'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

// const ContactPage = () => {
//   const [submitterName, setSubmitterName] = useState('')
//   const router = useRouter()
// const confirmationScreenVisible =
// router.query?.success && router.query.success === "true";
// const formVisible = !confirmationScreenVisible;

// const ConfirmationMessage = (
// <React.Fragment>
//   <p>
//     Thank you for submitting this form. Someone should get back to you within 24-48 hours.
//   </p>

//   <button onClick={() => router.replace("/contact", undefined, { shallow: true })}> Submit Another Response </button>
// </React.Fragment>
// );

// js form validation  with type = email and the attribute "pattern"
// const validEmail = document.querySelector("#email");
// const validfName = document.querySelector('#firstname')
// // regular expression
// const validRegex =
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//   submit.addEventListener("click", (e) => {

//   if (validEmail.value.match(validRegex) && validName === ' ' )) {
//     //  valid
//     e.preventDefault();
//   }else{validEmail:focus};
function Contact(props) {
  const {heading, label, text, subtitle, actionUrl} = props
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  // const validfName = document.querySelector('#firstname')
  // function show_prompt() {
  // var namealert = prompt('Please enter your name')
  // if (validfName != '') {
  //   alert(validfName)
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
      firstname,
      lastname,
      email,
      phone,
      message,
      submitted,
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
      }
    })
  }

  // const ContactForm = (

  // <form name="contact-form" method="POST" action="contact/?success=true">
  //   <label htmlFor="firstName">First Name *</label>
  //   <input id="firstname" name="firstName" required type="text" />
  //   <label htmlFor="lastName">Last Name *</label>
  //   <input id="lastname" name="lastName" required type="text" />

  //   <label htmlFor="email">E-mail Address *</label>
  //   <input id="email" type="email" name="email" required />
  //   <label htmlFor="message">Message *</label>
  //   <textarea id="message" name="message" required></textarea>
  //   <button type="submit">Submit</button>
  // </form>
  // )

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.contact_container}>
          <h2 className={styles.heading}>{heading}</h2>

          <div className={styles.contact_wrapper}>
            {/* Left contact page */}
            <form id="contact-form" className={styles.form} role="form" onSubmit={'validate()'}>
              <div className={styles.contact_details}>
                <formGroup id="contact-form" role="form" className={styles.inputGroup}>
                  <label htmlFor="firstname">First Name</label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder="First Name"
                    title="Please enter your first name here"
                    onChange={(e) => {
                      setFirstName(e.target.value)
                    }}
                    name="firstname"
                    className={styles.inputField}
                    required
                  />
                </formGroup>

                <formGroup className={styles.inputGroup}>
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Last Name"
                    title="Please enter your last name here"
                    onChange={(e) => {
                      setLastName(e.target.value)
                    }}
                    name="lastname"
                    className={styles.inputField}
                    required
                  />
                  {/* <small>Error Message</small> */}
                </formGroup>

                <formGroup className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    title="Please enter a valid email address"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    name="email"
                    className={styles.inputField}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  />
                  {/* <small>Error Message</small> */}
                </formGroup>
                <formGroup className={styles.inputGroup}>
                  <label htmlFor="phone">Phone (optional)</label>
                  <input
                    id="phone"
                    type="phone"
                    title="Please enter your phone number - this is optional!"
                    placeholder="Phone Number "
                    onChange={(e) => {
                      setPhone(e.target.value)
                    }}
                    name="phone"
                    className={styles.inputField}
                  />
                </formGroup>
                <formGroup className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className={styles.messageField}
                    type="text"
                    placeholder="Add a note to the artist!
            Feel free to share your inspiration or just say hi. I'd love to hear from you💞
            "
                    onChange={(e) => {
                      setMessage(e.target.value)
                    }}
                    name="message"
                    title="write a message here"
                  />
                  {/* <small>Error Message</small> */}
                </formGroup>
                <Link href="/thank_you" id="submit">
                  <input
                    title="send me a message"
                    className={styles.send_button}
                    type="submit"
                    id="submit"
                    alt="send me a message"
                    value="SEND"
                    onClick={(e) => {
                      handleSubmit(e)
                    }}
                    name="submitted"
                  />
                </Link>
              </div>
            </form>

            <div className={styles.contact_socials}>
              {/* right contact page */}

              <ul className={styles.contact_list}>
                <li className={styles.list_item}>
                  <h3>find me on social media</h3>
                  <ul className={styles.list_item_social}>
                    <Link href="https://www.facebook.com/kate.voxtime/">
                      <li title="Follow me on Facebook">
                        <a
                          target="_blank"
                          class="contact-icon"
                          // title="Follow me on Facebook"
                          alt="Follow me on Facebook"
                        >
                          <FontAwesomeIcon
                            style={{fontSize: '25px'}}
                            icon={faFacebook}
                          ></FontAwesomeIcon>
                        </a>
                      </li>
                    </Link>
                    <Link href="https://www.instagram.com/katevox_fineart/" target="_blank">
                      <li title="Follow me on Instagram">
                        <a
                          target="_blank"
                          class="contact-icon"
                          // title="Follow me on Instagram"
                          alt="Follow me on Instagram"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            style={{fontSize: '25px'}}
                            icon={faInstagram}
                          ></FontAwesomeIcon>
                        </a>
                      </li>
                    </Link>
                  </ul>
                  <li className={styles.list_item}></li>
                  <span className={styles.contact_phone}>
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                      (212) 555-2368
                    </a>
                  </span>
                </li>

                <li className={styles.list_item}>
                  <span className={styles.contact_email}>
                    <a
                      href="mailto:KateVoxTime@gmail.com?subject=Email from Website"
                      title="Send me an email"
                      type="email"
                    >
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                      KateVoxTime@gmail.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        {/* <h1>Contact Us</h1> */}
      {/* {formVisible ? ContactForm : ConfirmationMessage}
        {text && <SimpleBlockContent blocks={text} />}
      </div>  */}
    </section>
  )
}

Contact.propTypes = {
  heading: PropTypes.string,
  // label: PropTypes.string,

  // subtitle: PropTypes.string,
  // actionUrl: PropTypes.string,
}

export default Contact
