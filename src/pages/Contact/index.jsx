import React from "react";
import { Formik } from "formik";

function Contact() {
  return (
    <div className="container">
      <div className="letter-container">
        <div>
          <p className="text-left text-black -mb-3 mt-5 ml-1">Name</p>
          <input className="name-input" />
        </div>
        <div>
          <p className="text-left text-black -mb-3 mt-5 ml-1">Email Address</p>
          <input className="email-input" />
        </div>
        <div>
          <p className="text-left text-black -mb-3 mt-5 ml-1">Message</p>
          <textarea className="content-input" />
        </div>
        <div className="send-button">Send</div>
      </div>
    </div>
  );
}

export default Contact;
