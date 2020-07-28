import React from "react";

function Contact() {
  return (
    <div>
      <h3>Contact</h3>
      <div className="container">
        <form id="contactForm">
          <label htmlFor="fname">Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <label htmlFor="lname">Surname</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your phone number.."
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder="Your mail adress.."
          />
          <label htmlFor="subject">Message</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "200px" }}
            defaultValue={""}
          />
          <button type="submit" id="subbtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
