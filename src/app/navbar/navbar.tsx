"use client";
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from "./navbar.module.css"
import { menu,navbarHeading } from '../constant';

const Navbar = () => {
  const [visible, setvisible] = useState(false);

  return (
    <div >
      <div className={styles.navbarContainer}>
        <h1 className={styles.heading}>{navbarHeading.heading}</h1>
        {visible ?
          (
            <Image src="close.svg" alt='menu' width={32} height={32} className={styles.toggleButton} onClick={() => setvisible(false)} />
          )
          :
          (
            <Image src="menu.svg" alt='close' width={32} height={32} className={styles.toggleButton} onClick={() => setvisible(true)} />
          )

        }
        <div className={styles.header} >
          {
          menu?.map((item, index) =>
            <Link key={index + item.link} href={item.link} className={styles.header}>
              <h1 className={styles.navMenu} onClick={() => {
                setvisible(false)
              }}>{item.text}</h1>
            </Link>)
          }
        </div>

      </div>

      {
        visible
        &&
        <div className={styles.mWeb}>

          {
          menu?.map((item, index) =>
            <Link key={index + item.link} href={item.link} className={styles.mWebitem}>
              <h1 className={styles.navMenu} onClick={() => {
                setvisible(false)
              }}>{item.text}</h1>
            </Link>)
          }
        </div>
      }

    </div>
  )
}

export default Navbar
