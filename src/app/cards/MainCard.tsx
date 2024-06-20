import React from 'react'
import Image from 'next/image'
import CardContainer from './CardContainer'
import styles from './cards.module.css'

const MainCard = (props:any) => {
  return (
    <div className={styles.cardWrapper}>
        <Image src={props.src} alt={props.alt} className={styles.imageWrapper} width={350} height={300}/>
        <div className='flex flex-col items-start justify-center lg:pl-24 pl-12'>
        <h1 className='lg:text-2xl text-xl font-bold pt-2'>{props. roomTitle}</h1>
        <p className='w-[70%] pt-2'>{props.roomparagraph}</p>
        <p className='lg:text-xl text-[16px] font-bold pt-2 text-red-500'>{props.price}</p>
        </div>
    </div>
  )
}

export default MainCard