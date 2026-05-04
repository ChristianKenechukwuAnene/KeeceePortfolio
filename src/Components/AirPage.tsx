//import React from 'react';
import { Link } from "react-router-dom";
import air2 from'../assets/Air2.png';
import './AirPage.css';


function AirPage (){

return (   
<div className="air-page">

    <header className="air-header">
         <h1>Air Quality Monitoring as Interaction Design: Making the Invisible Visible</h1>
      </header>

    

      <main className="container">
        <article className="content">
          <div className="guardian-section">
          <h2>WHAT IS AIR QUALITY MONITORING?</h2>
          <p>
           Air quality monitoring involves measuring environmental conditions to detect harmful gases and pollutants 
           that are not visible to the human eye. Poor air quality can significantly impact health and wellbeing, 
           yet it often goes unnoticed in everyday environments due to the lack of immediate, accessible feedback.
          This project explores how real-time environmental data can be translated into clear and intuitive user interaction. 
          By using sensors to continuously monitor air conditions, the system captures changes in the surrounding environment 
          and transforms them into meaningful feedback. Rather than relying on complex numerical data, the design focuses on 
          simplicity and usability. Information is communicated through a combination of visual and auditory cues, including 
          an LCD display, color-coded LED indicators, and a buzzer for critical alerts. This approach ensures that users can quickly 
          understand air quality levels without needing technical knowledge.

          </p>

          <p>By making invisible environmental data visible and easy to interpret, the project demonstrates how interaction design
         can improve awareness and support healthier, more informed decisions in everyday life.
          </p>
          </div>

           <div className="guardian-section">
           <main className="container"></main>
            <h2>PROJECT IDEA</h2>
          <p>
            The goal of this project was to design an interactive system that makes air quality visible,
             understandable, and accessible to everyday users. Since air quality is often invisible and difficult 
             to interpret, the challenge was to translate environmental data into clear, intuitive feedback without 
             overwhelming the user with complex information. Rather than presenting raw data or technical readings,
            the system focuses on simplicity and immediate comprehension. It was designed to communicate changes in 
            air quality through a combination of visual and auditory feedback that users can interpret at a glance,
            reducing the need for active attention or prior knowledge. The device integrates an LCD display to provide
            real-time environmental data, alongside color-coded LED indicators that quickly signal air quality levels, 
            and a buzzer that activates under critical conditions. This layered feedback system ensures that users can understand
            their environment instantly, even in peripheral situations.The overall design prioritises usability, clarity, 
            and responsiveness, allowing users to become more aware of their surroundings and take action when air quality becomes unsafe. 
            By transforming invisible environmental conditions into meaningful interactions, the project demonstrates 
            how design can support awareness and influence everyday behaviour.
          </p>
          </div>

          <section className="Laser-hero">

        <div className="laser-img">  
          <img src={air2} alt="Air2"/>

        </div>
      </section>

       <div className="guardian-section">
          <h2>DESIGN PROCESS</h2>
          <p>
           The project followed an iterative design process, beginning with early sketches to explore layout, 
           user interaction, and how information would be communicated clearly. These initial ideas focused on
          simplifying complex environmental data into intuitive visual and auditory signals.
          A cardboard prototype was then developed to test the physical structure, spacing, and placement of
          components such as the sensors, display, and LEDs. This stage allowed for quick adjustments before moving 
          into a more refined build using laser-cut materials, improving both precision and durability of the enclosure.
         The system was implemented using Arduino, integrating an MQ-135 air quality sensor and a DHT11 temperature and humidity sensor. 
         These inputs were processed in real time through custom code, which translated sensor data into meaningful feedback for the user.
         The logic mapped air quality levels to corresponding outputs, triggering color-coded LEDs and activating a buzzer when thresholds were exceeded.
         </p>
         <p>
        The LCD display was programmed to present live readings in a clear and concise format, ensuring that users could
        easily interpret environmental conditions. The code was structured to continuously read sensor data, evaluate conditions,
        and update outputs dynamically, creating a responsive and interactive system. Throughout development, 
        testing and iteration played a key role in refining both the physical design and system behaviour.
        Each stage contributed to improving usability, clarity, and responsiveness, resulting in a cohesive 
        interaction design that effectively bridges digital processing and physical feedback.
          </p>
          </div>  

          
        </article>
      </main>

<Link className="back" to="/Projects">
  <button className="back-btn-green">
  <span className="back-icon">←</span>
  <span className="back-text">BACK</span>
</button>
</Link>


{/* CTA Section */}  
      <section className="cta">
        <div className="cta-text">
          <h2>Let’s work together on your next project</h2>
            <p className="italic-text">“Great projects start with a conversation. Let’s team up and turn your vision into reality.”
          </p>
           <h4>&copy; {new Date().getFullYear()} christian Anene. <span className="Rights">All Rights Reserved.</span></h4> {/* copy right year */ }
        </div> 
      </section> 
</div>
);
};


export default AirPage;