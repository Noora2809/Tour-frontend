// import React from 'react'
// import './newsletter.css'

// import {Container, Row, Col} from 'reactstrap'
// import maleTourist from '../assets/images/male-tourist.png'


// const Newsletter = () => {
//   return( 
//   <section className='newsletter'> 
//     <Container>
//         <Row>
//             <Col lg='6'>
//                 <div className="newsletter_content">
//                     <h2>Subscribe now to get useful travelling information</h2>

//                     <div className="newsletter_input">
//                         <input type="email" placeholder='Enter your email'/>
//                         <button className="btn newsletter_btn">Subscribe</button>
//                     </div>
//                     <p>As February unfolds, we're thrilled to bring you the latest updates and travel inspiration from TravelLogo Tours and Travels. Whether you're seeking a romantic getaway, an adrenaline-fueled adventure, or a serene retreat, we've got something special in store for you. Read on to discover the wonders that await!</p>
//                 </div>
//             </Col>
//             <Col lg='6'>
//                 <div className="newsletter_img">
//                     <img src={maleTourist} alt="" />
//                 </div>
//             </Col>

//         </Row>
//     </Container>
//   </section>
//   )
// }

// export default Newsletter


import React from 'react';
import './newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
  const handleSubscribe = () => {
    alert('Your subscription has been sent!');
  };

  return (
    <section className='newsletter'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='newsletter_content'>
              <h2>Subscribe now to get useful travelling information</h2>

              <div className='newsletter_input'>
                <input type='email' placeholder='Enter your email' />
                <button className='btn newsletter_btn' onClick={handleSubscribe}>
                  Subscribe
                </button>
              </div>
              <p>
                As February unfolds, we're thrilled to bring you the latest updates and travel inspiration from
                TravelLogo Tours and Travels. Whether you're seeking a romantic getaway, an adrenaline-fueled adventure,
                or a serene retreat, we've got something special in store for you. Read on to discover the wonders that await!
              </p>
            </div>
          </Col>
          <Col lg='6'>
            <div className='newsletter_img'>
              <img src={maleTourist} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
