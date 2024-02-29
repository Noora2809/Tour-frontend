import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,

                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 576,

                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }




    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>I recently used TravelLogo Tours and Travels to plan my dream vacation to Southeast Asia, and I couldn't be happier with the experience! From start to finish, the team at TravelLogo went above and beyond to ensure that every aspect of my trip was perfect.
                    </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>TravelLogo Tours and Travels made my trip unforgettable! Their attention to detail and personalized recommendations truly exceeded my expectations. I highly recommend their services to anyone seeking a seamless travel experience</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Jennie</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>


            <div className="testimonial py-4 px-3">
                <p>TravelLogo Tours and Travels delivered an exceptional vacation. Their expertise and support throughout the journey made every moment memorable. I'm grateful for their dedication to creating unforgettable experiences. Highly recommend their services!</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Nouf</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>Utilizing TravelLogo Tours and Travels was a pinnacle decision. Their meticulous planning and unwavering commitment to customer satisfaction ensured an unparalleled travel experience. I wholeheartedly endorse their services to discerning travelers seeking excellence</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Levia</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>


            <div className="testimonial py-4 px-3">
                <p>Engaging TravelLogo Tours and Travels was instrumental in orchestrating a seamless and enriching journey. Their expertise, coupled with personalized attention, culminated in a remarkable travel escapade. I unequivocally recommend their distinguished services to al</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>Rajik</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

        </Slider>
    )
}

export default Testimonials