//import React from 'react';
import { Link } from "react-router-dom";
import p_house from'../assets/P_House.png';
import './SmartPage.css';


function SmartPage (){

return (   
<div className="smart-page">

    <header className="smart-header">
         <h1>Step Into Tomorrow: A Smart Home Brought to Life in 3D.</h1>
       
      </header>
      



      <main className="container">
        <article className="content">
          <div className="guardian-section">
          <h2>Smart House Features</h2>
          <p>
            The smart house is designed as a fully automated living environment where technology enhances comfort,
            security, and everyday convenience. The experience begins at the automated entrance gate,
            which responds to motion and provides seamless access. Inside, the home uses intelligent
            lighting that adjusts to movement and time of day, creating a warm and energy‑efficient atmosphere.
            The smart glass door opens automatically, leading into a space equipped with integrated kitchen appliances,
            climate‑aware systems, and voice‑ or sensor‑controlled features. In the bedroom, automated blinds and ambient
            lighting adapt to user preferences, while the bathroom includes touchless fixtures and smart mirrors 
            that combine hygiene with modern elegance. Every feature works together to create a home 
            that feels responsive, intuitive, and effortlessly modern.

           </p>
           </div>

         <div className="guardian-section">
          <h2>Tools Used</h2>
          <p>
            The smart‑house project was developed using a combination of industry‑standard tools that support high‑quality
            3D visualization and animation. Autodesk Maya served as the core platform for modeling the architecture,
            creating the interior elements, and animating the automated features such as doors, lighting, and camera movement.
            Arnold was used to achieve realistic lighting, shadows, and reflections, giving the house a polished and lifelike appearance.
            Textures were created and refined using Photoshop or Substance Painter, allowing for detailed surfaces like glass, 
            metal, wood, and fabric. The final walkthrough was assembled and enhanced through video‑editing software such as
            After Effects or Premiere Pro, ensuring smooth transitions, color balance, and a professional presentation.
          </p>
          </div>


          <section className="Smart-hero">
          <div className="smart-img">  
          <img src={p_house} alt="P_House"/>

          </div>
          </section>
          <div className="guardian-section">
          <h2>Design Concept</h2>
          <p>
            The design concept centers on a modern, technology‑driven living space where automation and architecture work together seamlessly.
             Clean lines, open layouts, and minimalistic forms create a calm and elegant environment, while smart systems operate quietly in 
             the background to enhance comfort and convenience. Every interaction—whether a door opening, a light adjusting, 
             or a fixture responding—reflects the idea of effortless living. The concept emphasizes harmony between digital intelligence 
             and physical space, presenting a vision of the future where homes adapt naturally to the needs of their occupants.
          </p>
          </div>

          <div className="guardian-section">
          <p>
           <h2>Texturing & Visual Details</h2>
            The visual quality of the smart house is achieved through carefully crafted textures and lighting techniques.
           PBR materials were used to create realistic surfaces, from reflective glass and polished metal to warm wood and soft fabrics.
           Ceramic textures add clarity and cleanliness to bathroom and kitchen areas.
           HDRI lighting provides natural daylight that interacts with surfaces in a believable way,
          while interior lights are balanced to create depth and atmosphere. Smooth camera paths guide the viewer through the space, 
          highlighting key features and maintaining an immersive, cinematic feel throughout the walkthrough.
          </p> 
          </div>
        </article>

        
<div className="youtube-links">
  <a 
    href="https://www.youtube.com/watch?v=25ZX9Q9GuDk&t=6s" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="youtube-simple-link"
  >
    Watch the Smart House Walkthrough
  </a>

  <a 
    href="https://youtu.be/-kRKbsESxSM" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="youtube-simple-link"
  >
    Watch the Project DMD
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


export default SmartPage;