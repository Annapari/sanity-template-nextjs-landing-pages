import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from 'react'

// function validateFormWithJS() {
//   const name = document.querySelector('#firstname').value
//   const lastName = document.querySelector('#lastname').value

//   if (!name) {
//     alert('Please enter your name.')
//     return false
//   }

//   if (!lastName) {
//     alert('Please enter your last name.')
//     return false
//   }
// }
export default function Home() {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
      firstname,
      lastname,
      email,
      phone,
      message,
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

  return (
    <div className={styles.container}>
      <div className={styles.contact_container}>
        <h2 className={styles.heading}>Contact Form</h2>
        <div className={styles.contact_wrapper}>
          {/* Left contact page */}
          <form id="contact-form" className={styles.form} role="form">
            <div className={styles.contact_details}>
              <formGroup id="contact-form" role="form" className={styles.inputGroup}>
                <label htmlFor="firstname">First Name</label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="First Name"
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
                  placeholder="Email address"
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
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="phone"
                  placeholder="Phone (optional)"
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
                />
                {/* <small>Error Message</small> */}
              </formGroup>

              <input
                className={styles.send_button}
                type="submit"
                id="submit"
                value="SEND"
                onClick={(e) => {
                  handleSubmit(e)
                }}
              />
            </div>
          </form>

          <div className={styles.contact_socials}>
            {/* right contact page */}

            <ul className={styles.contact_list}>
              <li className={styles.list_item}>
                <h3>find me on social media</h3>
                <ul className={styles.list_item_social}>
                  <li>
                    <a
                      href="https://www.facebook.com/kate.voxtime/"
                      target="_blank"
                      class="contact-icon"
                      title="Follow me on Facebook"
                    >
                      a<i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/katevox_fineart/"
                      target="_blank"
                      class="contact-icon"
                      title="Follow me on Instagram"
                    >
                      b<i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
                <i class="fa fa-phone fa-2x">
                  <span className={styles.contact_phone}>
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      (212) 555-2368
                    </a>
                  </span>
                </i>
              </li>

              <li className={styles.list_item}>
                <i class="fa fa-envelope fa-2x">
                  <span className={styles.contact_email}>
                    <a
                      href="mailto:KateVoxTime@gmail.com?subject=Email from Website"
                      title="Send me an email"
                    >
                      KateVoxTime@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
