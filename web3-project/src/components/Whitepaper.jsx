import React from "react";
import "../assets/css/Whitepaper.css";
import tiger_img from "../assets/images/arijit.png";
function Whitepaper() {
  return (
    <div className="WhitePaper">
      <div className="aboutContainer">
        <div className="aboutContainerHead">ABOUT THE CRYO</div>
        <div className="aboutDescContainer">
          <div className="aboutDescImgContainer">
            <img className="aboutDescImg" src={tiger_img} alt="tiger icon" />
          </div>
          <div className="aboutDescText">CRYO was created as a web application-based product on software that utilises blockchain technology to purchase NFT-based event tickets so that it can provide security and ease of purchasing tickets online. With CRYO, all event tickets purchased by users will be in the form of NFT, so that the authenticity of the ticket is proven to be valid because all data contained in the blockchain can be seen by the owner and historical data on the ownership of the NFT. Aside from being an identity marker, the event organiser can also customise the shape of the NFT that will be sold so that it can become a unique souvenir for visitors to commemorate the event. To prevent corruption in event ticket sales, we also present a feature for sharing sales results with event stakeholders by the percentage determined by the organisers.
 </div>
        </div>
      </div>
    </div>
  );
}

export default Whitepaper;