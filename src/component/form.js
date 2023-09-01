// Form.js

import React, { useState } from 'react';
import { webhookURL, googleSheetURL } from '../routes/api'; // Import the URLs

import '../styles/form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const currentDateTime = new Date().toISOString();


  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      mobile: contactNumber,
      meta: currentDateTime,
    };

    try {
        const webhookResponse = await fetch(webhookURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        console.log('Webhook response:', webhookResponse);
  
        const googleSheetResponse = await fetch(googleSheetURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        console.log('Google Sheet response:', googleSheetResponse);
  
        // Reset form fields here if needed
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
  
  return (
    <div className="form-container">
      <div className="contact-form-container">
        <div className="custom-contact-details">
          <div className="custom-text-container-contact">
            <h2 className="custom-title">CONTACT US</h2>
            <div className="custom-para">
              <p className="custom-paragraph">
                Please enter details below and we shall get in touch with you shortly
              </p>
            </div>
          </div>
        </div>

        <div className="custom-form-section custom-bottom-left">
          <form className="custom-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <img
                src="/images/user.png"
                alt="User Icon"
                className="input-icon"
              />
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="custom-form-input"
                placeholder="Full Name"
              />
            </div>

            <div className="input-container">
              <img
                src="/images/smartphone_1.png"
                alt="Phone Icon"
                className="input-icon"
              />
              <input
                type="text"
                value={contactNumber}
                onChange={handleContactNumberChange}
                className="custom-form-input"
                placeholder="Contact Number"
              />
            </div>

            <div className="input-container">
              <img
                src="/images/smartphone_2.png"
                alt="Email Icon"
                className="input-icon"
              />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="custom-form-input"
                placeholder="Email Address"
              />
            </div>
            
            <div className="custom-submit-button-container">
            <button type="submit" className="custom-submit-button">
              Submit
            </button>
          </div>
          </form>
        </div>
      </div>

      <div className="custom-form-section custom-bottom-right">
        <div className="custom-image-container-form">
          <img
            src="/images/image_4.jpg"
            alt="Image"
            className="custom-image"
          />
          <div className="custom-fade-effect"></div>
          
        </div>
      </div>
    </div>
  );
};

export default Form;
