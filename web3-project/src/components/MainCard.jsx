import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import data from "../assets/data/data";
import '../assets/css/SearchCard.css';
const MainCard = () => {
  const [Data, SetData] = useState([]);
  const idx = localStorage.getItem("id");
  // console.log(idx);
  const filterdata = (idx) => {
    const tempdata = data.filter((val) => val.id === idx);
    SetData(tempdata);
    console.log(data);
    console.log(tempdata);
  };
  useEffect(() => {
    filterdata(idx);
    console.log(Data);
  }, []);
  return (
    <>
      <div className="collections">
        {Data.map((mp, idx) => (
          <div key={idx} className="CardDetail">
            <img src={mp.img} className="CardContImg" alt="cricket" />
            <div>
              <div>{mp.name}</div>
              <div>{mp.location}</div>
              <div>{"D"}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainCard;
