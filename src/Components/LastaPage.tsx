//import React from 'react';
import { Link } from "react-router-dom";
import wear from'../assets/Wear.png'; 
import './LastaPage.css';


function LastaPage (){

return (   
<div className="lasta-page">

    <header className="lasta-header">
         <h1> When Your Hands Can’t React, Your Wearable Can. </h1>
       
      </header>


      <main className="container">
        <article className="content">
          <div className="guardian-section">
          <h2>Project Overview</h2>
          <p>
           The Guardian Range Wearable is a security‑focused wristband designed to support personal safety 
           in everyday public environments. The idea originated from a practical question: What happens when
           someone cannot reach their self‑defence tool during a threatening situation? Many people rely on 
           handheld items like pepper spray, but these tools assume the user has free hands and enough time to react.
           This project challenges that assumption by proposing a hands‑free system that automatically senses 
           proximity and alerts the wearer through clear visual signals. Using an ultrasonic sensor, LED indicators, 
           and an LCD display, the wristband communicates three states safe, scanning, and danger allowing the user
           to understand their surroundings instantly. The aim is not to influence emotion or create fear, 
           but to provide a simple, accessible layer of awareness that supports real‑world security needs. 
           The Guardian Range Wearable demonstrates how wearable technology can offer practical protection
           when traditional tools fall short.
          </p>
          </div>

         <section className="lasta-hero">
      <div className="lasta-img">
          <img
            src={wear}alt="wear"/>
        </div>
      </section>
    
          <div className="guardian-section">
          <h2>Concept & Purpose</h2>
          <p>
            This project explores how a wearable device can automatically detect when 
            someone or something enters the user’s personal space, offering hands‑free
            awareness in situations where reaction time or mobility may be limited. 
            The wristband uses an ultrasonic sensor to measure distance and communicates 
            three clear states: green for safe, sky blue for scanning, and red for danger.
            These visual cues allow the wearer to understand their surroundings instantly,
            even if their hands are restrained, occupied, or unable to reach traditional 
            self‑defence tools. By focusing on proximity detection and clear alerts, the
            concept addresses real‑world security needs and highlights the limitations of 
            handheld protection devices. The wearable aims to provide practical, accessible 
            support in unpredictable environments.
           </p>
           </div>

           <div className="guardian-section">
          <h2>Technical Build</h2>
          <p>
            The prototype is powered by an Arduino microcontroller, which processes distance 
            data from the ultrasonic sensor and controls both the LED indicators and the LCD display.
            A portable LiPo battery makes the system fully wearable and easy to test in real environments.
            When an object enters the danger range, the LEDs switch to flashing red and the display shows a clear warning: 
            “YOUR SAFETY IS COMPROMISED.” While the final wearable would be smaller, lighter, and more integrated, 
            this prototype effectively demonstrates the core functionality, interaction logic, and real‑time responsiveness of the system.
           </p>
           </div>

           <div className="guardian-section">
          <h2>Reflection & Future Development</h2>
          <p>
            The Guardian Range Wearable highlights the importance of hands‑free safety solutions in unpredictable situations. 
            While the project is rooted in security rather than emotional design, it naturally raises questions about personal space,
            awareness, and how technology can support individuals in vulnerable moments. Future development could explore miniaturisation,
            vibration alerts, or integration with mobile devices. As a prototype, it successfully communicates the idea and opens the door
           
           to further innovation in wearable safety technology.
           </p>
           </div>
         
        </article>

        <div className="project_file">
  <a
    href={`${import.meta.env.BASE_URL}Phisical_Computer_file.pdf`}
    target="_blank"
    rel="noopener noreferrer"
    className="Phisical_Computer_file-btn view"
  >
    View Project File
  </a>
  
  <a 
    href="https://youtu.be/lebxcfpzxfc" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="youtube-simple-link"
  >
    Watch the Project Video
  </a>
  </div>


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


export default LastaPage;