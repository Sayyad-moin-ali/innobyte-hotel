import React from 'react'
import { servicesData } from '../constant'
import Image from 'next/image'
import styles from "./services.module.css"

const Services = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.serviceWrapper}>

                <h1 className={styles.heading}>{servicesData.services}</h1><hr />
                <h1 className={styles.heading}>{servicesData.serviceHeading}</h1>

                <div className={styles.itemContainer}>
                    <div className='flex pt-5'>
                        <Image src={"/star.svg"} alt='svg' width={50} height={50} />
                        <p className='pl-4 text-lg pt-3'>{servicesData.security}</p>
                    </div>
                    <div className='flex pt-5'>
                        <Image src={"/24hour.svg"} alt='svg' width={50} height={50} />
                        <p className='pl-4 text-lg pt-3'>{servicesData.hours}</p>
                    </div>
                </div>

                <div className={styles.itemContainer}>
                    <div className='flex pt-5 '>
                        <Image src={"/restaurant.svg"} alt='svg' width={50} height={50} />
                        <p className='pl-4 text-lg pt-3'>{servicesData.restaurant}</p>
                    </div>
                    <div className='flex pt-5'>
                        <Image src={"/tourist.svg"} alt='svg' width={50} height={50} />
                        <p className='pl-4 text-lg pt-3'>{servicesData.support}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services