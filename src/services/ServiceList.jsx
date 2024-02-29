import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'


const servicesData =[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc:"Planning a trip and need to know the weather conditions? Look no further than TravelLogo's innovative weather calculation tool."
    },
    {
        imgUrl:guideImg,
        title:"Best tour guide",
        desc:"Experience the wonders of your destination like a local with TravelLogo's selection of the best tour guides and experience the magic. "
    },{
        imgUrl:customizationImg,
        title:"Customization",
        desc:"Elevate your travel website with TravelLogo's customizable tour options. Our platform empowers you to tailor your tours."
    },

]


const ServiceList = () => {
  return (
    <>
    {
        servicesData.map((item,index)=> 
        <Col lg='3' md='6' sm='12' className='md-4' key={index}> 
        <ServiceCard item={item}/>
        </Col>
        )
    }
    </>
  )
}

export default ServiceList