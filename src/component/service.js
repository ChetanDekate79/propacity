import React from "react";
import '../styles/service.css'; // Import the CSS file


const Service = () =>{
    return(
        <div className="service-main">
            <div  className="service-content">
                <span className="service-span">ARANYA’S SERVICES</span>
                <h3>30+ PREMIUM AMENTIES</h3>
            </div>
            <div className="image-container-service">
            
            <img src="/images/premium.png" alt="User" style={{ width: "80vw", height: "20vw" }} />
            <img src="/images/image_2.jpg" alt="User" style={{ width: "100vw", height: "40vw",marginTop:"8vw" }} />
            </div>
            {/* <div  className="service-content">
                <span className="service-span">THE ADVANTAGES</span>
                <h3>AMENITIES</h3>
            </div> */}
            <img src="/images/Amenties _2.png" alt="User" style={{ width: "100vw", height: "70vw",marginTop:"8vw" }} />

        </div>
    )
}
export default Service;