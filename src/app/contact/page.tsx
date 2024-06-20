
import React from 'react'
import { contactHeading } from '../constant'
import styles from './contact.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {

  return (

    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input placeholder='Name' name='name' type='text' required className={styles.formInput} ></input>
        <input placeholder='Your email' name='email' type='email' required className={styles.formInput}  ></input>
        <input placeholder='Subject' name='subject' type='text' required className={styles.formInput}></input>
        <textarea placeholder='Your message' name='message' required className={styles.formInput} ></textarea>
        <button type='submit' className={styles.submitButton}>Submit</button>
      </div>
      <div className={styles.contactDescription}>
        {
          contactHeading?.map((item, index) => {
            return (
              <div key={index}>
                <h1 className={styles.aboutAddressheading}>{item.title}</h1>
                <p className={styles.description}>{item.conatct_Address}</p>
                <p className={styles.description}>{item.contact_paragraph}</p>
                <div key={index} className='flex gap-3 pt-3'>
                  <Image src={"/email.svg"} alt='email' width={30} height={30} />
                  <Link href={`mailto:${item.contact_email}`}>{item.contact_email}</Link>
                </div>
                <div key={index} className='flex gap-3 pt-3'>
                  <Image src={"/call.svg"} alt='email' width={30} height={30} />
                  <Link href={item.contact_phone}>{item.contact_phone}</Link>
                </div>
              </div>
            )
          }) 
        }
      </div>
    </div>
  )
}

export default Contact
