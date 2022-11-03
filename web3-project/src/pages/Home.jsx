import React from "react";
import Hero from "../components/Hero";
import CardContainer from "../components/CardContainer";
import Whitepaper from "../components/Whitepaper";
import "../assets/css/Home.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Home(props) {
  // console.log(props.formData);
  return (
    <div className="Home">
      <Navbar/>
      <Hero />
      <CardContainer formData={props.formData}/>
      <Whitepaper />
      <Footer/>
    </div>
  );
}

export default Home;