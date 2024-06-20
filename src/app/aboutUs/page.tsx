import React from 'react'
import Image from 'next/image'
import { aboutHeading } from '../constant'
import styles from './about.module.css'

const AboutUs = () => {
  return (
    <div className={styles.container}>

      <div>
        <Image className={styles.aboutUsimage} src="/aboutimg.jpg" alt='Image' width={400} height={380}></Image>
      </div>

      {
        aboutHeading?.map((item, index) => {
          return (
            <div className={styles.description}>
              <p className={styles.heading}>{item.aboutHeading}</p><hr/>
              <h1 className={styles.title}>{item.aboutTitle}</h1>
              <p className={styles.aboutParagraph}>{item.aboutParagraph}</p>
              <p className={styles.aboutParagraph}>{item.aboutProducts}</p>
              <h1 className={styles.aboutAddressheading}>{item.aboutAddressheading
              }</h1>
              <p className={styles.aboutParagraph}>{item.aboutAddress}</p>

            </div>
          )
        })
      }

    </div>
  )
}

export default AboutUs
