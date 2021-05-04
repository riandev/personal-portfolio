import React from "react";
import mobile from "../../../images/telephone.png";
import email from "../../../images/email.png";
import location from "../../../images/location.png";
import ContactMeCard from "../ContactMeCard/ContactMeCard";
import emailjs from "emailjs-com";
import contactme from '../../../images/contactme.jpg';
import contactmes from '../../../images/36431-support.gif';

const ContactMe = () => {
  function sendEmail(e) {
    emailjs
      .sendForm(
        "gmail",
        "template_aj413fj",
        e.target,
        "user_z7M5SFMsKqUB74k83dsqg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    e.preventDefault();
  }
  const contactData = [
    {
      icon: mobile,
      title: "Phone",
      description: "Call me between 9 Am to 10 pm, Bangladesh Time",
      via: "+8801632321051",
    },
    {
      icon: email,
      title: "Phone",
      description: "Email Me for any kind questions and discussions",
      via: "rian.acca@gmail.com",
    },
    {
      icon: location,
      title: "Phone",
      description: "213 Shapla Housing, West Agargoan,Dhaka-1207",
      via: "View Map",
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-center mt-5">Contact Me</h2>
        <h5 className="text-center text-secondary mt-3 mb-4">
          Obviously I'm a Web Developer. Experienced with all stages <br /> of
          the development cycle for dynamic web projects.
        </h5>
      </div>
      <div className="container">
        <div className="row">
          {contactData.map((contact) => (
            <ContactMeCard contact={contact}></ContactMeCard>
          ))}
        </div>
      </div>
      <div className="container mt-5">
        <div className='row'>
          <div className='col-md-6'>
            <form className="contact-form w-75" onSubmit={sendEmail}>
              <input
                style={{ borderRadius: "10px" }}
                className="form-control"
                type="text"
                name="user_name"
                placeholder="Full Name:"
              />
              <input
                style={{ borderRadius: "10px" }}
                className="form-control mt-3"
                type="email"
                name="user_email"
                placeholder="Your Email:"
              />
              <input
                name="subject"
                style={{ borderRadius: "10px" }}
                className="form-control mt-3"
                type="text"
                placeholder="Your Subject:"
              />
              <textarea
                className="form-control h-25 mt-3"
                name="message"
                placeholder="Your Message:"
                id=""
                cols="20"
                rows="10"
              ></textarea>
              <input
                className="btn btn-primary mt-3"
                type="submit"
                value="Send"
              />
            </form>
          </div>
          <div className='col-md-6'>
              <img className='img-fluid mt-5' src={contactmes} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
