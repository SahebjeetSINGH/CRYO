import React from "react";
import Card from "../components/Card";
import "../assets/css/CardContainer.css";

function CardContainer(props) {
  return (
    <div className="collectionHead">
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

      <div className="cardContainer">
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
         <Card key={0} id={0} visible={true} formData={props.formData?props.formData:""} data ={props.formData?props.formData[0]:""}  />
                <Card key={1} id={1} visible={true} formData={props.formData?props.formData:""} data ={props.formData?props.formData[1]:""} />
                <Card key={2} id={2} visible={true} formData={props.formData?props.formData:""} data ={props.formData?props.formData[2]:""} />
                <Card key={3} id={3} visible={true} formData={props.formData?props.formData:""} data ={props.formData?props.formData[3]:""} />
              
      </div>
    </div>
  );
}

export default CardContainer;