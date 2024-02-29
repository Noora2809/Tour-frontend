import React from 'react';
import "../styles/about.css";
import aboutImg from "../assets/images/about2.jpg";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <img src={aboutImg} alt="about-img" className="full-width-image" />
        <div className="centered-text">
          About
        </div>
      </div>

      <div className="container mt-5">
        <h1>Our History</h1>

        <p>
          TravelLogo Tours and Travels was founded in 2005 by a group of passionate travelers who wanted to revolutionize the way people explore the world. Fueled by their love for adventure and their desire to make travel accessible to everyone, they embarked on a journey to create a platform that would cater to the diverse needs of modern-day travelers.In its early years, TravelLogo focused on curating unique and immersive travel experiences, ranging from thrilling adventures to serene getaways. With a commitment to quality and customer satisfaction, the platform quickly gained popularity among travelers seeking authentic and memorable journeys.
          Over the years, TravelLogo continued to innovate and adapt to the changing landscape of the travel industry. From introducing mobile apps for seamless booking experiences to implementing AI-powered recommendation engines, the platform remained at the forefront of technological advancement, ensuring that travelers had access to the best possible services.TravelLogo was not just a travel company; it was a community of like-minded individuals who shared a passion for exploration and discovery. Embracing the principles of responsible tourism, the platform actively promoted sustainable travel practices and collaborated with local communities to minimize the environmental impact of tourism.Today, TravelLogo Tours and Travels stands as a leading authority in the travel industry, serving millions of travelers worldwide. With a diverse range of destinations, personalized itineraries, and unparalleled customer support, the platform continues to inspire wanderlust and create unforgettable experiences for adventurers of all kinds.
        </p>

        <h1>Our Vision</h1>

        <p>At TravelLogo Tours and Travels, our vision is to ignite the spirit of adventure and exploration in every traveler, inspiring them to embark on journeys that enrich their lives and connect them with the world around them.

          We envision a future where travel is not just a means of reaching a destination, but a transformative experience that broadens horizons, fosters cultural understanding, and creates lifelong memories.

          Driven by our passion for discovery and our commitment to excellence, we strive to become the leading global platform for personalized and sustainable travel experiences. We aim to empower travelers with the tools and resources they need to unlock the wonders of the world, while simultaneously promoting responsible tourism practices that preserve our planet for future generations.

          As we continue on this journey, we envision a world where every traveler feels empowered to explore with confidence, curiosity, and compassion, forging connections that transcend borders and enrich lives.</p>

          <h1>Our Mission</h1>

          <p>At TravelLogo Tours and Travels, our mission is to empower travelers to discover the world with ease, authenticity, and sustainability.

We are dedicated to providing unparalleled travel experiences by curating a diverse range of destinations, accommodations, and activities tailored to the unique preferences and interests of each traveler.

Through innovative technology and personalized service, we aim to simplify the travel planning process, allowing our customers to focus on creating unforgettable memories.

We are committed to promoting responsible tourism practices that respect local cultures, protect the environment, and support communities around the world.

Driven by our passion for exploration and our dedication to customer satisfaction, we strive to be the trusted partner for travelers seeking immersive and enriching journeys.</p>

      </div>

    </div>
  );
}

export default About;
