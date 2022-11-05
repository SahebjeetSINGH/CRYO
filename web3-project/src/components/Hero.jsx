import React from "react";
import Counter from "./Counter";
import Carousel from "../components/Carousel";
import "../assets/css/heroHome.css";
import {useNavigate} from "react-router-dom"
function Hero() {
  const navigate = useNavigate();
  return (
    <div>
      <div className = "heroContainer" style={{paddingTop:"120px"}}>
        <div className = "heroContainerPart1">
          <div className= "heroContainerText"> Stop Buying Ticket from anyone or <span style ={{"color"  : "#000" , "Border" : "solid 1px #fff"}}>Unofficial</span> </div>
          <div className = "heroContainerText2">Purchase Tickets from here and get your unique NFTs for yourself and buy , sell or trade. </div>
          <div className = "heroContainerText3">The price of NFT : <span className="heroContainerTextspan"> Yet To be decided</span> </div>
          <button className = "heroContainerButton" onClick={()=>{navigate('/Collections')}}>Buy Now</button>
        </div>
        <div className = "heroContainerPart2">
          <Carousel/>
        </div>
      </div>
    </div>
  );
}

export default Hero;