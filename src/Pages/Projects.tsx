import laser1 from'../assets/Laser1.png';
import k_house from'../assets/K_House.png';
import wear1 from'../assets/Wear1.png';
import united from'../assets/United.png';
import ul_app from'../assets/UL_app.png';
import photo from'../assets/Photo.png';
import man from'../assets/Man.png';
import air2 from'../assets/Air2.png';
import explorer from'../assets/Explorer.png';
import { Link } from "react-router-dom";
import './Projects.css'; // Import the CSS file



function Projects(){
  {/*This defines a React functional component named Projects.
     Everything inside the return() block is what will be displayed on your Projects page.*/}

    return(

      <div className="my-projects">
      {/* Hero Section */}

       <header className="projects-header">
        <h1>PROJECTS</h1>
       
      </header>

      {/*Image (intro-img) — displays a preview image (smart) of my Smart House Project.
        Text (intro-text) — gives a detailed description of what the project is about.
        The text explains how i created a 3D Automated Smart House using Maya, focusing on automation, animation, and user-centered design.
        <Link to="/smart"> — a React Router link that navigates to a dedicated page (probably /smart) where visitors can learn more about that specific project. */}

      {/* Hero Section */}
      <div className="projects-container">

        <div className="container">
      {/* BLOCK 1A: IMAGE LEFT, TEXT RIGHT */}
      <div className="row reverse">
        <div className="text">
          <h1>
            Where Environmental Awareness <span>Meets</span> Real-Time Interaction 
          </h1>
          <p>
            Air quality is often invisible, making harmful environments difficult to detect. This project translates real-time 
            environmental data into clear user feedback using sensors, an LCD display, LEDs, and a buzzer. 
            Developed through iterative prototyping, it demonstrates how interaction design can extend beyond screens into practical, real-world systems.
          </p>
          <Link to="/air"><button className="readmore-btn">
          Know More
         </button> </Link>
        </div>

        <div className="image">
          <img src={air2} alt="Air2"/>
        </div>
      </div>
      </div>

     <div className="container">

      {/* BLOCK 1: TEXT LEFT, IMAGE RIGHT */}
      <div className="row">
        <div className="text">
          <h1>
            Where Intelligent Design<span> Meets </span> Modern Living.
          </h1>
          <p>
            A smart house isn’t just automated it’s alive with responsive intelligence. 
            Lights shift as you enter, doors anticipate your movement, and climate, security,
            and appliances adapt in real time. Every interaction feels seamless, almost invisible,
            turning daily living into a fluid, intuitive experience.
            It’s the future of comfort, designed to elevate the way we live.
          </p>
          <Link to="/smart"> <button className="readmore-btn">
         Know More
          </button> </Link>
        </div>

        <div className="image">
          <img src={k_house} alt="k_house"/>
        </div>
      </div>
      </div> 

      <div className="container">
      {/* BLOCK 2: IMAGE LEFT, TEXT RIGHT */}
      <div className="row reverse">
        <div className="text">
          <h1>
            Laser Cutting as Critical <span>Design </span>
          </h1>
          <p>
            This project explores how laser cutting can be used to create physical objects that influence behaviour,
            not just function. The goal was to design a phone stand that encourages users to reflect on how they interact with their mobile devices.
            Laser cutting is a precise digital fabrication process that turns vector-based designs into real-world objects. 
          </p>
          <Link to="/puma"><button className="readmore-btn">
          Know More
         </button> </Link>
        </div>

        <div className="image">
          <img src={laser1} alt="Laser1"/>
        </div>
      </div>
      </div>
  

      <div className="container">
      {/* BLOCK 3: TEXT LEFT, IMAGE RIGHT */}
      <div className="row">
        <div className="text">
          <h1>
           A Wristband That  <span> Thinks  </span> About Your Safety.
          </h1>
          <p>
            The Guardian Range Wearable began as a security‑focused concept exploring how
            a person could stay aware of danger when their hands are restrained or unable 
            to reach traditional self‑defence tools. The prototype uses an ultrasonic sensor,
            LEDs, and an LCD display to signal safe, scanning, and danger zones. Built with Arduino, 
            it demonstrates a practical, hands‑free approach to personal safety in public spaces.
          </p>
          <Link to="/lasta"> <button className="readmore-btn">
          Know More
          </button> </Link>
        </div>

        <div className="image">
          <img src={wear1}alt="Wear1"/>
        </div>
      </div>
      </div>
   

       <div className="container">
       {/* BLOCK 4: IMAGE LEFT, TEXT RIGHT */}
      <div className="row reverse">
        <div className="text">
          <h1>
            Photography <span>Design </span>
          </h1>
          <p>
            During my Animation undergraduate studies, I completed a dedicated photography course.
            This training honed my skills in composition, lighting, and visual 
            storytelling using DSLR cameras. It enhanced my artistic eye and provided a 
            strong foundation in capturing compelling imagery, directly complementing my 
            work in digital design and animation.  
          </p>
          <Link to="/photo"><button className="readmore-btn">
          Know More
          </button> </Link>
        </div>

        <div className="image">
          <img src={photo} alt="Photo"/>
        </div>
      </div>

      </div>

      <div className="container">
      {/* BLOCK 5: TEXT LEFT, IMAGE RIGHT */}
      <div className="row">
        <div className="text">
          <h1>
            <span>Designing Harmony:</span> Interactive Art and the Pursuit of Social Sustainability.
          </h1>
          <p>
            Sustainability is often framed as protecting the planet, but true sustainability reaches far deeper. 
            It shapes how we connect, participate, and feel within a community. <span>You Are a Note</span> pushes this idea forward through interactive design, transforming
            wellbeing and connection into an experience you can step into
          </p>
          <Link to="/united"> <button className="readmore-btn">
          Know More
          </button> </Link>
        </div>

        <div className="image">
          <img src={united} alt="United"/>
        </div>
      </div>
      </div>

      <div className="container">
       {/* BLOCK 6: IMAGE LEFT, TEXT RIGHT */}
      <div className="row reverse">
        <div className="text">
          <h1>
           <span> Drifting Topologies:</span> Navigating Sound as a Living Landscape
          </h1>
          <p>
            Drifting Topologies explores how sound can become a space to move through rather than a fixed composition.
            Using Freesound Explorer, I treat audio as a digital landscape made of textures, 
            drones, and field recordings. Each dot on the map becomes a point of contact, 
            and every click becomes a step in an unfolding journey.
            
          </p>
          <Link to="/explorer"><button className="readmore-btn">
          Know More
         </button> </Link>
         </div>

        <div className="image">
          <img src={explorer} alt="Explorer"/>
        </div>
      </div>

      </div>

        <div className="container">
      {/* BLOCK 7: TEXT LEFT, IMAGE RIGHT */}
      <div className="row">
        <div className="text">
          <h1>
              UL Navigation App: <span>Campus Mobility </span>Through UX Design
          </h1>
          <p>
            The UL Navigation App project explores my complete UX design process as I set out to create a modern,
            intuitive navigation tool tailored specifically for the University of Limerick community. 
            The idea began with understanding how students, staff, and visitors move through campus, and the 
            challenges they face when trying to locate buildings.
            
          </p>
          <Link to="/ul_app"><button className="readmore-btn">
          Know More
           </button> </Link>
        </div>

        <div className="image">
          <img src={ul_app} alt="UL_app"/>
        </div>
      </div>
      </div>

      <div className="container">
       {/* BLOCK 8: IMAGE LEFT, TEXT RIGHT */}
      <div className="row reverse">
        <div className="text">
          <h1>
           LASTA 2025 — AR Exhibition<span>  Artwork</span> 
          </h1>
          <p>
            One of the featured artworks I created for the LASTA programme tells the story of a man’s journey 
           from Mexico City to the United States. Designed to come alive through augmented reality, the piece 
           uses animated sequences to depict his passage through desert landscapes, flying birds, swirling sand 
           dust, and the transition from day to night.
            
          </p>
           <Link to="/lasta2025"><button className="readmore-btn">
            Know More
           </button> </Link>
        </div>

        <div className="image">
          <img  src={man} alt="Man"/>
        </div>
      </div>

      </div>



 
             
           
           



      </div>
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
};

export default Projects;