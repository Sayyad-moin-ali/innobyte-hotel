import React from 'react'
import { cardsData } from './cardData'
import MainCard from './MainCard'
import styles from './cards.module.css'

const CardContainer = () => {
    return (
        <div className='flex flex-col '>
            <h5 className='lg:text-xl text-lg flex justify-center pt-5 '>Our Living Room</h5><hr/>
            <h1 className='lg:text-2xl text-xl font-bold lg:w-[100%] w-[90%] lg:pl-0 pl-12 flex justify-center pt-4'>The Most Memorable Rest Time Starts Here.</h1>
        <div className={styles.CardContainer} >
            {
                cardsData?.map((item, index) => (
                    <MainCard item={item} key={index} src={item.src} alt={item.alt} roomTitle={item.roomTitle} roomparagraph={item.roomparagraph} price={item.price} />
                ))
            }
        </div>
        </div>
    )
}

export default CardContainer