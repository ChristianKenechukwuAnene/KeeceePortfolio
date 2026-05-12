/**MY IMPORT SECTION..... import all the images you use on the homepage — React treats these as static assets.
                          You import Link from react-router-dom to navigate between pages (e.g., /projects).
                          The CSS file App.css styles the layout, colors, and animations. **/



import keecee from '../assets/Keecee.png';                                    
import chris from '../assets/Chris.png';
import wear1 from'../assets/Wear1.png';
import smart from'../assets/Smart.png';
import air1 from'../assets/Air1.png';
import lasta2025 from'../assets/Lasta2025.png';
import { Link } from 'react-router-dom';


import '../App.css'; 




/*MY HERO ....Displays my name, role, and skills tags.
              Shows my portrait (chris.png) beside the text.
              Gives a strong “personal brand” introduction */



function Home() {
  return (
        <div className="home-container">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-text">
          <h2>
            I'm <span className="highlight">Christian Anene</span>
          </h2>
          <h3 className="typewriter"> 
          <span className="typewriter-text">"Interaction Designer (UX/UI)"</span>
          </h3>
          <div className="tags">
            <span>Web Developer</span>
            <span>Arduino IDE</span>
            <span>3D</span>
            <span>Power BI</span>
          </div>
        </div>
        <div className="chris_1">
          <img src={chris} alt="chris_1" />
        </div>
      </section>


      

    {/* ABOUT SECTION.... Introduces you and your design philosophy.
                          about_header likely centers the section and adds padding. */ }
      <section  className="about">
        <div className="about_header">
        <h3>ABOUT ME</h3>
        <p className="about-intro">
           Interaction and Experience Designer with a background in Animation and VFX, combining creative <br/>
           storytelling with user-centered design.Experienced in designing interactive systems,<br/>
           prototyping physical and digital interfaces, and translating complex ideas <br/> into intuitive user experiences. Skilled in tools such as Figma,
           Adobe <br/>Creative Suite, and Arduino-based prototyping, with a strong <br/>focus on usability, accessibility, and real-world problem solving.<br/>
          Passionate about creating meaningful, human-centered <br/>experiences across digital and physical environments.
          </p>



        {/*Opens your resume (resume.pdf) in a new tab.
                       Also provides a download option.
                       So users can either view or save it. */}

         <div className="resume-buttons">

  {/* View Resume */}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-btn view-btn"
  >
    View Resume
  </a>

  {/* Download Resume */}
  <a
    href="/resume.pdf"
    download
    className="resume-btn download-btn"
  >
    Download Resume
  </a>

</div>



       {/*Displays your profile photo and personal details.
                       .Email class makes your email text red (as defined in CSS earlier).
                        Great for quick contact info. */}

        </div>
        <div className="about-content">
          {/* Profile Box */}
          <div className="profile-box">

            <div className="profile-pic">
              <img src={keecee} alt="keecee"/>
           </div>

            <div className="profile-info">
              <p><strong>FullName:</strong> Christian Kenechukwu Anene</p>
              <p><strong>Birthday:</strong> 25 March</p>
              <p><strong>Phone:</strong> +353 877065986</p>
              <p><strong>Email:</strong><span className="Email"><em>keecee_a@yahoo.com</em></span></p>
            </div>
          </div>  
      
             {/*Shows your skills with progress bars.
                       Inline styles like style={{ width: "90%" }} visually represent your proficiency.
                       Each .skill likely styled as a horizontal bar in CSS. */}



     {/* Skills */}
          <div className="skills">
            <h4>Skills</h4>
            <div className="skill">
              <span>Arduino IDE</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "90%" }}>90%</div>
              </div>
            </div>
            <div className="skill">
              <span>Adobe Creative Suite</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "95%" }}>95%</div>
              </div>
            </div>
            <div className="skill">
              <span>HTML</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "85%" }}>85%</div>
              </div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "75%" }}>75%</div>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Displays 4 featured projects in a grid.
                Each card has:
                A thumbnail,
                A title,        
                A “Know More” link (these can later route to dedicated project pages like /projects/lasta).*/}


{/*  Projects Section */}
      <section className="main-projects">
        <div className="main-projects-header">
          <div>
            <h2>FEATURED PROJECTS</h2>
            <p className="italic-text">“A showcase of selected projects that highlight my <br/>
                skills in design and development.”</p>
          </div>
          <Link to="/projects" className="view-all">VIEW ALL</Link>
        </div>

          {/* Project Grid */}
        <div className="projects-grid">
          <div className="project-card">
            <img src={wear1} alt="wear1"/>
            <h3>Awareness You Can Wear</h3>
            <Link to="lasta"><button className="knowmore-btn">
            Know More 
            </button></Link>
            </div>

          <div className="project-card">
            <img src={smart} alt="smart"/>
            <h3>3D Smart House</h3>
            <Link to="smart"><button className="knowmore-btn">
            Know More 
            </button></Link>
            </div>

          <div className="project-card">
            <img src={air1} alt="air1"/>
            <h3>Air Quality Monitoring System </h3>
            <Link to="/Air"><button className="knowmore-btn">
            Know More 
            </button></Link>
            </div>

          <div className="project-card">
            <img src={lasta2025} alt="lasta2025"/>
            <h3>LASTA 2025</h3>
            <Link to="lasta2025"><button className="knowmore-btn">
            Know More 
            </button></Link>
           </div>
          </div>
      </section>



      {/* Encourages collaboration (“Let’s work together…”).
              Uses new Date().getFullYear() to auto-update the copyright year.
              Good SEO + professional feel*/}
  

        {/* CTA Section */}  
      <section className="cta">
        <div className="cta-text">
          <h2>Turning ideas into interactive experiences.</h2>
            <p className="italic-text">“Great projects start with a conversation. Let’s team up and turn your vision into reality.”
          </p>
           <h4>&copy; {new Date().getFullYear()} christian Anene | UX/UI & Interaction Designer</h4> {/* copy right year */ }
        </div> 
      </section> 
       </div>  
  
  );
}

export default Home;