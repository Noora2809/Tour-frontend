import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import home1 from "../assets/images/home1.jpg";
import home3 from "../assets/images/home3.jpg";

import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import experienceImg from "../assets/images/experience.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonials/Testimonials";
import Newsletter from "../shared/Newsletter";
import HomeTour from "./HomeTour";


const Home = () => {
  return (
    <>
      {/* hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Planning a trip"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Welcome to <span className="highlight">Travellogo</span>
                </h1>
                <p>
                  Every journey begins with a promise of adventure, discovery,
                  and unparalleled experiences. As your premier travel
                  companion, we're dedicated to curating unforgettable trips
                  tailored to your desires, ensuring each moment is filled with
                  excitement and wonder. Embark on a voyage of exploration with
                  TravelLogo. Whether you're seeking the sun-kissed beaches of
                  tropical paradises, the awe-inspiring landscapes of majestic
                  mountains, or the vibrant culture of bustling cities, we've
                  got you covered. Our platform features a diverse array of
                  destinations, handpicked to satisfy every traveler's
                  wanderlust.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box">
                <img src={home1} alt="" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={home3} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* hero section start */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services_subtitle">Our services</h5>
              <h2 className="services_title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* featured tour section start */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured_tour-title">Our Major Destinations</h2>
            </Col>
            {/* <FeaturedTourList /> */}

            <HomeTour/>


          </Row>
        </Container>
      </section>

      {/* featured tour section end */}

      {/* experinece section start */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  At TravelLogo, we understand that every journey is unique, and
                  we are committed to ensuring that your travel experience
                  exceeds your expectations.
                </p>
              </div>
              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter_box">
                  <span>2k+</span>
                  <h6>Regular customers</h6>
                </div>
                <div className="counter_box">
                  <span>18 </span>
                  <h6>Years of experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience_img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* experinece section end */}

      {/* gallery section start */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery_title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* gallery section end */}

      {/* testimonial section start */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className="testimonial_title">What our fans says about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* testimonial section end */}
      <Newsletter/>

    </>
  );
};

export default Home;
