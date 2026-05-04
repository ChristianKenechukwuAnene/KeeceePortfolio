//import React from 'react';
import { Link } from "react-router-dom";
import ul_app2 from'../assets/UL_app2.png';
import './UL_appPage.css';


function UL_appPage (){

return (   
<div className="ul_appPage">

    <header className="ul_app-header">
         <h1>UrbanLink: A Seamless Navigation Experience for UL Users</h1>
       
      </header>
      

      <main className="container">
        <article className="content">
          <div className="guardian-section">
          <h2>Problem Statement, Project Goal & Target Users</h2>
          <p>
           Navigating the University of Limerick campus can be confusing for new students, visitors,
           and even returning users, especially when buildings are spread out and routes are unclear. 
           This project set out to solve that challenge by designing a user‑centred mobile navigation
            app that provides simple, intuitive, and reliable guidance across campus. 
            The goal was to create a tool that helps users quickly locate buildings, understand routes,
            and move confidently through their environment without stress. The target users include
            first‑year students who often feel overwhelmed when trying to find lecture halls, visitors
            who may not recognise building names or landmarks, and staff or returning students 
            who want faster, more efficient ways to get around. By understanding the needs and
            frustrations of these groups, the project focused on delivering a navigation experience
            that reduces confusion, saves time, and improves the overall campus journey..
          </p>
          </div>

          <div className="guardian-section">
          <h2>UX Process Overvie</h2>
          <p>
            The UX process for this project followed a structured, user‑centred approach that ensured 
            every design decision was grounded in real needs and practical insights. The process began
            with research, where I analysed existing campus maps, observed common navigation challenges,
            and gathered feedback from students and visitors to understand their frustrations and 
            expectations. From there, I developed a clear information architecture that prioritised 
            simplicity, allowing users to quickly access search, map views, and building details without 
            unnecessary steps. This foundation guided the creation of low‑fidelity wireframes, 
            which focused on layout, flow, and core interactions. Once the structure felt intuitive,
            I moved into high‑fidelity UI design in Figma, crafting a clean, modern interface with 
            a UL‑inspired colour palette and clear visual hierarchy. I then built an interactive
            prototype to simulate real navigation scenarios and conducted usability testing to 
            identify areas for improvement. Feedback from testing helped refine icons, route visibility,
            and search prominence, ultimately shaping a smoother, more intuitive navigation experience.
          </p>
          </div>

          <section className="ul_app-hero">
   <div className="ul_app-img">  
          <img src={ul_app2} alt="UL_app2"/>

        </div>
</section>
            <div className="guardian-section">
          <h2>Final UI Highlight</h2>
          <p>
            The final UI for this project was designed to deliver a clean, intuitive, and visually engaging
            navigation experience that supports users at every stage of their journey. The home screen 
            features a prominent search bar and clearly defined quick‑access categories, allowing users
            to instantly find lecture halls, labs, cafés, or parking areas without unnecessary steps.
            The map view was refined to prioritise clarity, using distinct route colours, readable
            building labels, and smooth zoom and pan interactions to help users orient themselves 
            quickly. Each building information page presents essential details such as opening hours, 
            room numbers, and a direct “Get Directions” option, ensuring users can transition seamlessly
            from browsing to navigating. The navigation mode itself provides step‑by‑step guidance with
            clear visual cues, estimated travel time, and distance indicators, making movement across 
            campus feel effortless. Together, these UI elements create a cohesive, user‑friendly 
            experience that enhances confidence, reduces confusion, and transforms campus navigation 
            into a smooth, intuitive process.
          </p>
          </div>

          <div className="guardian-section">
          <p>
           <h2>Conclusion</h2>
            The UL Navigation App project demonstrates how thoughtful UX design can transform a complex 
            environment into a seamless and empowering experience. By grounding the process in user research, 
            iterative testing, and clear visual communication, the final solution delivers an intuitive 
            wayfinding tool that supports students, visitors, and staff alike. The refined interface, 
            simplified navigation flow, and user‑centred features work together to reduce confusion and 
            enhance confidence across the campus journey. This project highlights my ability to analyse 
            real problems, design meaningful solutions, and create polished, functional prototypes that
           elevate everyday experiences through purposeful design.
          </p> 
          </div>
          <h4>link to the PDF file</h4>
          <div className="ULnav_file">
  {/* Opens PDF in new tab */}
  <a
    href={`${import.meta.env.BASE_URL}ULnav_file.pdf`}
    target="_blank"
    rel="noopener noreferrer"
    className="ULnav_file-btn view"
  >
    View UL_Nav File
  </a>

  {/* Forces download */}
  <a
    href={`${import.meta.env.BASE_URL}ULnav_file.pdf`}
    download
    className="ULnav_file-btn download"
  >
    Download UL_Nav File
  </a>

  <a 
    href="https://www.figma.com/proto/LjgkfW0zKSaaU5zdad63iX/Untitled?page-id=1%3A2&node-id=2-8&viewport=-393%2C484%2C0.25&t=Gp8NiBRelE049N8z-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A8&show-proto-sidebar=1"
    target="_blank" 
    rel="noopener noreferrer" 
    className="youtube-simple-link"
  >
    View the Project in figama
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


export default UL_appPage;