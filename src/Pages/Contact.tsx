// src/components/Contact.tsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setField, resetForm } from "../features/contactSlice";
import "./Contact.css";

function Contact() {
  const dispatch = useAppDispatch();
  const { name, email, message } = useAppSelector((s) => s.contact);
  const [success, setSuccess] = useState(false);

  const formRef = useRef<HTMLFormElement>(null); 

  const handleChange =
    (field: "name" | "email" | "message") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch(setField({ field, value: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_xxxxx",   
        "template_xxxxx",  
        formRef.current,
        "NhWlXiOeadxtfWDFg" 
        
      )
      .then(
        () => {
          dispatch(resetForm());
          setSuccess(true);
          setTimeout(() => setSuccess(false), 2000);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    
  <div className="contact-page">

    <header className="hero3">
      <h1>Contact Me</h1>
    </header>

    <div className="contact-container">

      <div className="contact-header">
        <h1>"From pixels to perfection</h1>
        <h1 className="subhead">reach out today!"</h1>
      </div>

      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        
        <label>Full name</label>
        <input
          type="text"
          name="from_name"
          value={name}
          onChange={handleChange("name")}
        />

        <label>Email address</label>
        <input
          type="email"
          name="from_email"
          value={email}
          onChange={handleChange("email")}
        />

        <label>Message</label>
        <textarea
          name="message"
          value={message}
          onChange={handleChange("message")}
        />

        <button type="submit">Submit</button>

        {success && (
          <div className="form-success">
            Message sent — thank you!
          </div>
        )}
      </form>

      <section className="cta">
        <div className="cta-text">
          <h2>Turning ideas into interactive experiences.</h2>
          <p className="italic-text">
            “Great projects start with a conversation. Let’s team up and turn your vision into reality.”
          </p>
          <h4>&copy; {new Date().getFullYear()} christian Anene | UX/UI & Interaction Designer</h4>
        </div>
      </section>

    </div> 

  </div>
);
}

export default Contact;