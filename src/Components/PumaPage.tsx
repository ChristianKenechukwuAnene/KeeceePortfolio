//import React from 'react';
import { Link } from "react-router-dom";
import laser2 from'../assets/Laser2.png';
import './PumaPage.css';


function PumaPage (){

return (   
<div className="puma-page">

    <header className="puma-header">
         <h1>Laser Cutting as Critical Design: Rethinking Phone Use</h1>
      </header>

    

      <main className="container">
        <article className="content">
          <div className="guardian-section">
          <h2>What is Laser Cutting?</h2>
          <p>
            Laser cutting is a digital fabrication technique that uses a high-powered laser to cut, engrave,
            or etch materials with precision. Designers create vector-based digital files that guide 
            the laser along specific paths, allowing for accurate shapes, patterns, and details that would 
            be difficult to achieve by hand. It works on a variety of materials, including wood, acrylic, MDF,
            fabric, and even some metals. Laser cutting is widely used in prototyping, product design, art,
            and architecture because it can quickly turn digital concepts into precise physical objects.
            The process is fast, repeatable, and highly versatile.
          </p>
          </div>

           <div className="guardian-section">
           <main className="container"></main>
            <h2>Project Idea</h2>
          <p>
            The main goal of this project was to explore critical design using laser cutting. 
            Instead of creating a standard phone stand focused on comfort or efficiency,
            the aim was to design an object that encourages reflection and changes how people 
            interact with their devices. Critical design challenges the assumption that design 
            should always make life easier. It can provoke thought, reveal hidden behaviours,
            or make everyday habits visible. For this project, I focused on how people often 
            use their phones automatically, checking them quickly without thinking. The phone
            stand was designed to slightly disrupt this habit, slowing interaction and making
            users more aware of their behaviour. This shows how even a simple object can have
            a meaningful impact on everyday routines.
          </p>
          </div>

          <section className="Laser-hero">

        <div className="laser-img">  
          <img src={laser2} alt="Laser2"/>

        </div>
      </section>

            <div className="guardian-section">
          <h2>Full Project Explanation / Step-by-Step Process</h2>
          <p>
           Through this project, I used it not just to create an object, but to explore how design can change behaviour and create meaningful experiences.
          </p>
          <ul style={{ lineHeight: "1.8" }}>
        <li>
         This project was created using a laser cutting machine, a tool that allows precise cutting and engraving
          on materials like MDF. In this exercise, I used 4mm MDF, which was strong enough to hold structure but easy to cut and assemble.
        </li>

        <li>
         Instead of focusing only on making a useful phone stand, I focused on critical design,
         which means designing something that changes how people think or behave. The goal was
         to create a phone stand that makes users more aware of how they use their phones.
        </li>

        <li>
          To achieve this, I modified a basic phone stand template. I changed the angle and structure
          of the design to make the phone slightly harder to view and interact with. This created a
          small level of discomfort, encouraging users to slow down and think before using their phone.
        </li>

        <li>
          During the design process, I worked with vector files and prepared the design carefully for cutting. 
          I made sure the dimensions, line thickness, and cutting order were correct so the laser cutter could produce a clean and accurate result.
        </li>
        <li>
          The fabrication process was very precise. Watching the machine cut the design showed how a digital idea can quickly become a physical object.
        </li>
        <li>
          After assembling the phone stand, I tested how people interacted with it. I noticed that the design 
          changed behaviour slightly, making users pause and adjust how they used their phone.
          This showed that even a simple object can influence everyday habits.
        </li>
        <li>
          Overall, this project helped me understand that design is not only about making things easier,
          but also about creating experiences that make people think. It also improved my skills 
          in laser cutting, prototyping, and connecting ideas with physical design.
        </li>
      </ul>
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


export default PumaPage;