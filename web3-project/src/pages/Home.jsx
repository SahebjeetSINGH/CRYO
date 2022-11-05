import React from "react";
import Hero from "../components/Hero";
import CardContainer from "../components/CardContainer";
import Whitepaper from "../components/Whitepaper";
import "../assets/css/Home.css";
import image1 from "../assets/images/dil.png"
import image2 from "../assets/images/david.png"
import image3 from "../assets/images/jubin.png"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home(props) {
  // console.log(props.formData);
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <div>
        <h1 className="text-center collectionHeading">LATEST COLLECTIONS</h1>
        <div className="search-filter-sort">
          <div className="navbarHomeSection2SearchContainer cardsearchoption">
            <i className="bi bi-search"></i>
            <input
              className="navbarHomeSection2SearchBar"
              type={"text"}
              placeholder="Search Collectibles"
            ></input>
          </div>
        </div>
      </div>
      <div className="SearchCardCont" style={{"justifyContent" : "center" , "gap" : "10px"}}>
        <div className="CardContSearch">
          <img src= {image1} className="CardContImg" alt="cricket" />
          <button className="TicketBuySearch">Buy Ticket</button>
        </div>
        <div className="CardContSearch">
          <img src={image2} className="CardContImg" alt="cricket" />
          <div>dj</div>
          <div>djdjdkd</div>
          <button className="TicketBuySearch">Buy Ticket</button>
        </div>
        <div className="CardContSearch">
          <img src="jfk" className="CardContImg" alt="cricket" />
          <div>dj</div>
          <div>djdjdkd</div>
          <button className="TicketBuySearch">Buy Ticket</button>
        </div>
      </div>
      <Whitepaper />

      <Footer />
    </div>
  );
}

export default Home;
