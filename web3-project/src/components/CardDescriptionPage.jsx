import React, { useState, useEffect } from "react";
import data from "../assets/data/data";
import '../assets/css/SearchCard.css';
const CardDescriptionPage = ({ searchdata }) => {
  const [Data , SetData] = useState([]);
  const filterdata = (searchdata) => {
    const tempdata = data.filter((val) => val.tag === searchdata);
    SetData(tempdata);
  }
  useEffect(() => {
    filterdata(searchdata);
    console.log(Data);
  }, []);
  return (
    <div className="SearchCardCont">
      {
        Data.map((mp , idx)=>(
          <div key ={idx} className = "CardContSearch">
            <img src={mp.img} className="CardContImg" alt="cricket" />
            <div>{mp.name}</div>
            <div>{mp.location}</div>
            <div className="TicketBuySearch">Buy Ticket</div>
          </div>
        ))
      }
    </div>
  );
};

export default CardDescriptionPage;
