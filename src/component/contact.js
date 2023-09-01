import React from "react";
import '../styles/contact.css'; // Import the CSS file

const Contact = () =>{
    return(
        <div className="contact-container">
<div className="text-container">
            {/* <span className='content-span'>MUMBAI</span> */}
          <h2 className="title">SPECTACULAR <br/>SURROUNDINGS <br/>
AS FAR AS THE EYE CAN SEE</h2>
<div className="para">
          <p className="paragraph">
          Piramal Aranya is an ode to perfection. It balances contemporary design with the scenic 
          natural beauty of its environment. Every residence invites you to soak in the surroundings,
           from the endless greenery of Rani Baug on the western side and the shimmering Arabian Sea on the east.
            Avyan at Piramal Aranya will be home to something truly spectacular with premium dual aspect living          
            </p>
            </div>
        </div>
        <div className="upper-border-contact">
        <div className='service-main-contact-sub'>
            <div className='text-contact'>
              <span className='main-text-box'>66%</span>
              <span className='sub-text-box'>Botanical garden views</span>
            </div>
         
          
            <div className='text-contact'>
              <span className='main-text-box'>33%</span>
              <span className='sub-text-box'>Mumbai harbour and botanical garden views</span>
            </div>
         
        
            <div className='text-contact'>
              <span className='main-text-box'>66%</span>
              <span className='sub-text-box'> Mumbai harbour views</span>
           
          </div>

        </div>
      </div>
      <div className="service-main-contact">
            <div  className="service-content">
                <span className="service-span">LOCATION</span>
                <h3>NEIGHBORHOOD</h3>
            </div>
            </div>
            <div className="lower-border-contact">
                <div className='service-main-contact-sub'>
                    <div className='text-contact-column'>
                        <div className='bullet-point'>
                            <div className='bullet-content'>
                                <span className='main-text-box-contact'>Bhau Daji Lad Museum</span>
                                <span className='sub-text-box'>3.5 Km Away</span>
                            </div>
                        </div>
                        <div className='bullet-point'>
                            <div className='bullet-content'>
                                <span className='main-text-box-contact'>Magen David Synagogue</span>
                                <span className='sub-text-box'>3.5 Km Away</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-contact-column'>
                        <div className='bullet-point'>
                            <div className='bullet-content'>
                                <span className='main-text-box-contact'>St. Paul’s Tamil Church</span>
                                <span className='sub-text-box'>3.5 Km Away</span>
                            </div>
                        </div>
                        <div className='bullet-point'>
                            <div className='bullet-content'>
                                <span className='main-text-box-contact'>Byculla Club − Fire Temple</span>
                                <span className='sub-text-box'>3.5 Km Away</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="contact-details">
                <div className="text-container-contact">
                    <h2 className="title">CONTACT US</h2>
                    <div className="para">
                        <p className="paragraph">
                            Please enter details below and we shall get in touch with you shortly
                        </p>
                    </div>
                </div>
            </div> */}
        </div>

    );
};
export default Contact;