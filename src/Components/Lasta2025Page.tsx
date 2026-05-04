//import React from 'react';
import { Link } from "react-router-dom";
import bold from'../assets/Bold.png';
import './Lasta2025Page.css';


function Lasta2025Page (){

return (   
<div className="lasta2025-page">

    <header className="lasta2025-header">
         <h1>Creative Artist | Augmented Reality | Visual Storytelling</h1>
       
      </header>

      <main className="container">
        <article className="content">
          <div className="guardian-section">
          <h2>Beyond the Frame Overview</h2>
          <p>
            Beyond the Frame is an augmented‑reality artwork created for the LASTA Festival 2025 
            a national arts festival shaped by young people and dedicated to showcasing emerging creative voices.
            As part of the creative artist team, I developed an interactive piece that merges traditional 
            illustration with digital animation, activated through the Artivive app. My goal was to push 
            the boundaries of how audiences experience visual storytelling by layering motion, sound, and 
            symbolic transitions over a static artwork.
            The project allowed me to explore the relationship between physical and digital space, creating 
            an artwork that shifts and evolves as viewers engage with it. By blending visual design, animation,
            and AR technology, I aimed to create an experience that feels alive, immersive, and emotionally resonant. 
            Beyond the Frame highlights my ability to combine artistic expression with emerging tools, transforming
            a simple illustration into a dynamic narrative that invites deeper connection and discovery.
          </p>
          </div>

          
           <div className="guardian-section">
          <h2>The Concept</h2>
          <p>
            I began by exploring themes of transformation, duality, and hidden layers ideas that naturally lend 
            themselves to augmented‑reality storytelling. I wanted the artwork to reveal more than what is visible
            at first glance, encouraging viewers to look deeper and discover meaning through interaction. 
            This led me to develop a visual language built around shifting forms, symbolic transitions,
            and subtle contrasts between what is seen and what is hidden. By combining traditional illustration
            with digital animation, the concept evolved into a layered narrative where each element changes as
            the viewer engages, reflecting the fluid, ever‑changing nature of personal journeys
          </p>
          </div>

          <section className="lasta2025-hero">
         <div className="lasta2025-img">  
          <img src={bold} alt="Bold"/>

        </div>
        </section>

          <div className="guardian-section">
          <h2>Illustration & Animation of the Beyond the Frame</h2>
          <p>
            For the illustration stage, I focused on creating a strong visual foundation that could stand on its own 
            before any digital elements were added. I explored composition, symbolism, and colour to build a piece 
            that communicated emotion and narrative even in its static form. Every shape, tone, and detail was chosen 
            to support the story and guide the viewer’s eye across the artwork.
            In the animation phase, I expanded this foundation by designing motion sequences that deepened the narrative.
            Subtle movements, transitions, and atmospheric effects were introduced to bring the artwork to life, adding energy,
            emotion, and rhythm. These animated layers transformed the illustration into an evolving experience,
            revealing hidden meaning as the viewer engaged with the AR component.
          </p>
          </div> 

          <div className="guardian-section">
          <p>
           <h2>AR Integration & Exhibition Reflection</h2>
           For the AR integration stage, I used Artivive to merge the animated sequences seamlessly with the base illustration.
            This required careful alignment of timing, transitions, and visual cues so that the digital layer felt naturally 
            connected to the physical artwork. I experimented with depth, pacing, and atmospheric effects to ensure that each 
            animated moment enhanced the narrative rather than overwhelming it. The goal was to create an augmented experience 
            that felt intuitive, immersive, and emotionally engaging the moment viewers held up their device.

           Being part of the LASTA creative artist team was an inspiring and transformative experience. The exhibition 
           allowed me to explore new technologies, collaborate with curators and fellow artists, and present my work to a live 
           and curious audience. Watching people interact with the AR layer — discovering hidden motion, symbolism, and meaning 
           reinforced my passion for creating art that bridges physical and digital worlds. The positive response affirmed the 
           power of storytelling through augmented reality and strengthened my confidence as a creative practitioner.

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


export default Lasta2025Page;