//import React from 'react';
import { Link } from "react-router-dom";
import explorer from'../assets/Explorer.png';
import './ExplorerPage.css';


function ExplorerPage (){

return (   
<div className="explorer-page">

    <header className="explorer-header">
         <h1>Poetic + Conceptual</h1>
       
      </header>
      

      <main className="container">
        <article className="content">
          <div className="guardian-section">
          <h2>Sound as a Landscape for Discovery</h2>
          <p>
            Sound is usually understood as something linear - a beat, a melody, or a track
             arranged from start to finish. Drifting Topologies challenges this idea by treating
              sound as a place rather than a product. Instead of composing in a timeline, the project
               invites the performer to explore a map filled with ambient textures, drones, and field recordings. 
               Each point on the map becomes a location to visit, and each movement becomes part of the unfolding experience.
               This approach encourages a slower, more attentive form of listening. 
               The performer is not trying to build a song but to navigate a shifting environment.
                By drifting through clusters of sound, pausing, moving, and responding to what appears,
                 the performance becomes a journey shaped by curiosity and interaction. The result is an 
                 ambient soundscape that emerges naturally from movement, rules, and the act of exploring.
          </p>
          </div>

          <section className="explorer-hero">
         <div className="explorer-img">  
          <img src={explorer} alt="Explorer"/>

        </div>
        </section>
          <div className="guardian-section">
          <h2>Movement as a Path to Emerging Atmosphere</h2>
          <p>
            Freesound Explorer presents thousands of audio samples as points scattered across a digital map.
             Each point is a possible direction, and each click becomes a small step into a new sonic space. 
             Instead of choosing sounds in advance, the performer navigates this map in real time, letting 
             movement shape what the piece becomes. The atmosphere is not designed beforehand — it forms gradually through the act of exploring.
            The performance is guided by a set of simple rules that determine how the performer responds to each sound.
            A soft texture might encourage staying within a cluster, while a harsh or noisy sound signals it’s
             time to move on. Long sounds create moments of stillness; short sounds invite quick shifts.
            These rules create a rhythm of listening and reacting, allowing the soundscape to unfold naturally.

            Through this process, the piece becomes less about selecting sounds and more about discovering how they connect.
             The atmosphere emerges from navigation, attention, and the quiet decisions made along the way.
          </p>
          </div>
           <div className="guardian-section">
          <h2>Rules as a Guide for Balance and Flow</h2>
          <p>
            The performance is shaped by a set of simple rules that act as a gentle framework rather than strict instructions.
             These rules help maintain balance within the soundscape so that no single texture overwhelms the experience. 
             Short sounds encourage small, local movements across the map, while long sounds create moments of stillness and reflection.
              When a harsh or noisy texture appears, it becomes a signal to shift direction and explore a new region.
               Softer ambient tones invite deeper listening and slower navigation. Through these patterns, 
               the rules guide attention without limiting creativity. They create a natural rhythm of movement and pause,
                allowing the atmosphere to unfold gradually and remain calm, spacious, and balanced.
          </p>
          </div>
          <div className="guardian-section">
          <p>
           <h2>Listening as a Personal Practice</h2>
           Drifting Topologies was created as a personal exploration of listening, movement, and interaction. 
           The process involved learning how the tool behaves, designing rules that felt intuitive, 
           and shaping a performance that remains open to discovery each time it is played.
            Rather than aiming to produce a fixed piece of music, the project focuses on experiencing sound as
           a living environment — something that changes depending on where you go and how you respond.
           Each performance becomes a unique journey shaped by small decisions, gentle navigation,
            and attentive listening. It is an invitation to slow down, explore, and let the soundscape reveal itself through movement.
          </p> 
          </div>
          <h4>link to the PDF file</h4>
          <div className="Interactive_file">
  {/* Opens PDF in new tab */}
  <a
    href={`${import.meta.env.BASE_URL}Interactive_file.pdf`}
    target="_blank"
    rel="noopener noreferrer"
    className="Interactive_file-btn view"
  >
    View Project File
  </a>
  <a
    href={`${import.meta.env.BASE_URL}Score_file.pdf`}
    target="_blank"
    rel="noopener noreferrer"
    className="Score_file-btn view"
  >
    View Score File
  </a>

  {/* Forces download */}
  <a
    href={`${import.meta.env.BASE_URL}Interactive_file.pdf`}
    download
    className="Interactive_file-btn download"
  >
    Download Interactive File
  </a>

   <a 
  href="https://youtu.be/9dtcpdwGdWc" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="youtube-simple-link"
>
  Watch the Drifting Topologies
</a> 
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


export default ExplorerPage;