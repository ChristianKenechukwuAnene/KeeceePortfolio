//import React from 'react';
import { Link } from "react-router-dom";
import united from'../assets/United.png';
import './UnitedPage.css';


function UnitedPage (){

return (   
<div className="united-page">

    <header className="united-header">
         <h1>You are a note - together, we are the song</h1>
       
      </header>
      

      <main className="container">
        <article className="content">
          <div className="guardian-section">
          <h2>Rethinking Sustainability Beyond the Environment</h2>
          <p>
            Sustainability is often understood primarily in environmental terms—reducing waste,
             conserving resources, and protecting ecosystems. However, sustainable development
              also includes social and emotional dimensions. A truly sustainable future depends 
              not only on environmental balance but also on wellbeing, equality, and inclusive 
              participation. Social sustainability emphasizes the importance of belonging,
               dignity, and mutual recognition within communities. When individuals feel invisible
                or excluded, the social fabric weakens. This broader understanding of
                sustainability forms the conceptual foundation of You Are a Note, 
                positioning the project within a human-centered vision of sustainable development.
          </p>
          </div>
           <div className="guardian-section">
          <h2>From Heartbeat to Collective Harmony</h2>
          <p>
            You Are a Note explores social sustainability through interactive audiovisual design.
             The installation translates biometric pulse data into sound and projected visuals,
              transforming each participant’s heartbeat into a musical note, a dynamic color, 
              and a geometric fragment. Individually, each contribution is distinct. Collectively,
               these elements merge into harmonious chords and interconnected visual compositions.
                The system is intentionally structured so that harmony emerges only when multiple 
                participants engage. This reflects a key principle of sustainable societies:
                 diversity does not weaken unity—it strengthens it when supported by balanced and inclusive systems.
          </p>
          </div>
          <div className="guardian-section">
          <h2>Equality Embedded in System Design</h2>
          <p>
            The installation also addresses inclusion and reduced inequalities through its internal logic.
             Each participant is assigned a unique instrument and mapped within a harmonious musical scale,
              ensuring that no contribution overpowers another. The structure prevents hierarchy and promotes
               balance, symbolizing equal participation within a shared environment. This conceptual
                framework aligns with the United Nations Sustainable Development Goals, particularly SDG 3 
                (Good Health and Well-Being) and SDG 10 (Reduced Inequalities). Rather than presenting
                 these global goals through data alone, the project transforms them into a sensory and participatory experience.
           </p>
           </div>
          <section className="united-hero">
          <div className="united-img">  
          <img src={united} alt="United"/>

          </div>
            </section>
           <div className="guardian-section">
          <p>
           <h2>A Collaborative Exploration of Belonging</h2>
               you Are a Note was developed as a collaborative project by a team of three members,
              combining concept development, research, storyboard design, and presentation strategy.
              Through shared creative exploration, the team aimed to design an installation that 
              communicates the importance of emotional visibility, mental wellbeing, and collective harmony.
              The collaborative process itself reflects the project’s message: meaningful outcomes
              emerge when diverse perspectives work together. Just as the installation requires multiple
              participants to achieve harmony, the project’s development relied on cooperation, shared ideas, and collective vision.
          </p> 
          </div>
          <h4>link to the PDF file</h4>
          <div className="project_file">
  {/* Opens PDF in new tab */}
  <a
    href={`${import.meta.env.BASE_URL}project_file.pdf`}
    target="_blank"
    rel="noopener noreferrer"
    className="project_file-btn view"
  >
    View Project File
  </a>

  {/* Forces download */}
  <a
    href={`${import.meta.env.BASE_URL}project_file.pdf`}
    download
    className="project_file-btn download"
  >
    Download Project File
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


export default UnitedPage;