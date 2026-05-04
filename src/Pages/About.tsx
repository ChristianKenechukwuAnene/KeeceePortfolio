
import './About.css'; // Import the CSS file
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaPinterest, FaArtstation } from "react-icons/fa";


//This defines a React functional component named About.
// It returns JSX  that will be rendered on the website.*//
function About() {
  return (

     <div className="contact-me">  
  {/* {This is the main wrapper for the entire “About” page.
       The CSS class contact-me is controlling the overall layout and spacing} */}

     {/* Hero Section */}
      <header className="hero2">
        <h1>ABOUT</h1>
       
      </header>


    <div className="bio-card">

      <div className="name-logo">
       <span className="name-logo-script">Christian Kenechukwu Anene</span>
       <span className="name-logo-surname">UX/UI & Interaction Designer</span>
       </div>


      <div className="data">

      {/*This block contains my background story and professional journey:
        About me: a short bio introducing your design focus and style.
        Education: where and what i studied (e.g. VFX and Motion Design at Münster University).
        Experience: examples of my work and how i developed my skills through projects.
        Essentially, this part gives visitors insight into my professional narrative. */}

        <div className="segment">
          <div className="aboutSeg">
            <h3>About me</h3>
            <p>
             I am a UX/UI and Interaction Designer focused on creating intuitive, user-centred 
             experiences across digital and physical systems.My background in animation and motion
             design allows me to approach design with a strong sense of visual storytelling and purposeful motion. 
             I design interfaces where usability is at the core, and every interaction is considered, intentional, and meaningful.
             I am particularly interested in how design extends beyond screens-exploring how users
            interact with systems in real-world environments. My work often combines UX design with prototyping, 
            using tools such as Arduino to build interactive systems that communicate information clearly and effectively.
            I aim to create solutions that are not only visually engaging but also practical, accessible, and grounded in real user needs.
            </p>

            <h3>Education & Foundation</h3>
            <p>
              <br />
              I hold a BA (Hons) in Animation, VFX, and Motion Design from Munster Technological University, 
              where I developed a strong foundation in visual design, storytelling, and motion.
              </p>
             <p> <br/>I am currently completing a Master’s degree in Interaction and Experience Design at
               the University of Limerick, where I have expanded my focus into user-centered design,
               interaction systems, and usability. This combination of creative and technical education allows me to approach design
               from both an artistic and problem-solving perspective.
            </p>

            <h3>Experience & Practice</h3>
            <p>
              <strong>UX/UI & Interaction Designer</strong>
              <br />
              During my Master’s programme, I designed and developed a personal blog as a platform to explore and communicate
               UX/UI design principles and front-end development.
              The project involved designing user-friendly interfaces, structuring content for clarity, and implementing t
              he system using React and CSS. I focused on creating a clean, minimal design while ensuring usability across devices by improving responsiveness for mobile users.
              This experience strengthened my ability to translate design concepts into functional interfaces,
               while also improving my communication of design decisions through written and visual content.
            </p>
            <p>
              <strong>Graphic Designer</strong>
              <br />
              During my undergraduate studies, I developed strong visual communication skills through projects in typography, colour theory,
               layout design, and motion graphics.
              I gained experience using Adobe Creative Suite, 2D/3D animation, and visual storytelling techniques to create engaging digital content.
              This foundation continues to influence my approach to UX/UI design, allowing me to create interfaces that are not only functional but also visually coherent and engaging.
            </p>
          </div>

          <div className="skills1">
            <h3>Skills & Tools</h3>

            <h4>UX & DESIGN</h4>
            <div className="tags1">
              <span>User Research</span>
              <span>Wireframing</span>
              <span>Maya 3D</span>
              <span>Prototyping</span>
              <span>Interaction Design</span>
              <span>User Flows </span>
            </div>

            <h4>TOOLS</h4>
            <div className="tags1">
              <span>After Effects</span>
              <span>Illustrator</span>
              <span>Photoshop</span>
              <span>Adobe XD</span>
              <span>Figma</span>
              <span>Premiere Pro  </span>
              <span>CapCut</span>
            </div>

             <h4>TECH</h4>
            <div className="tags1">
              <span>Arduino</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Adobe XD</span>
              <span>HTML</span>
              <span>Power BI</span>
            </div>

            <h4>3D & VISUAL</h4>
            <div className="tags1">
              <span>Maya</span>
              <span>Blender</span>
              <span>Cinema 4D </span>
              <span>Davinci Resolve</span>
              <span>TouchDesigner</span>
            </div>
          </div>
        </div>
        <div className="sidebar">
      {/* Your existing sidebar content */}
      <div className="skill-social">
      <h3>Connect with Me</h3>
        {/* ... existing sections ... */}
      </div>

{/* {This creates a sidebar with links to my social media profiles.
     Each <a> tag wraps an icon downloded from react icon (Facebook, LinkedIn, Instagram, Twitter, Pinterest, Artstation).
     When clicked, each icon opens my social profile in a new browser tab (target="_blank").} */}

      {/* ✅ Social Media Links */}
      <div className="social-links">
        <div className="icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/feed"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter />
            </a>

            <a
            href="https://ie.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaPinterest />
          </a>

          <a
            href="https://www.artstation.com/?sort_by=community&include_ai=false"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaArtstation />
          </a>
        </div>
      </div>
    </div>
    </div>
    </div>
    
  {/* {This is the closing section of the page.
       Encourages visitors to collaborate or contact me (“Let’s work together…”).
       Includes an automatically updating copyright year:} */}

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

export default About;