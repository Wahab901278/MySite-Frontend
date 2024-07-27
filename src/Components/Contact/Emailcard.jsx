// src/EmailCard.js
import React from "react";
import "./contact.css";

const EmailCard = () => {
  return (
    <div className="email-card">
      <form className="email-form">
        <div className="form-group row">
          <div className="column">
            <label htmlFor="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="column">
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default EmailCard;
