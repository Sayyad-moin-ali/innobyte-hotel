import React from 'react'
import Navbar from './navbar/navbar'
import Slider from './Slider'
import BookNow from './component/BookNow'
import CardContainer from './cards/CardContainer'
import Map from './component/Map'
import Services from './component/Services'

const Home = () => {
  return (
    <div> 
    
    <Slider/>
    <BookNow/>
    <Services/>
    <CardContainer/>
    <Map/>
    </div>
  )
}

export default Home