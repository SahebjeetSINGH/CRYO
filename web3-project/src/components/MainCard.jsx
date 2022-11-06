import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import useMetaMask from "../hooks/useMetaMask";
import data from "../assets/data/data";
import "../assets/css/SearchCard.css";
import { useNavigate } from "react-router-dom";
const MainCard = () => {
  const [Data, SetData] = useState([]);
  const navigate = useNavigate();
  const idx = localStorage.getItem("id");
  const [Show, SetShow] = useState(false);
  // console.log(idx);
  const { connect, disconnect, balance, isActive, account } = useMetaMask();

  if (window.ethereum) {
    console.log(account);
    console.log("WALLET FOUND");
  } else {
    alert("install metamask extension!!");
  }
  const filterdata = (idx) => {
    const tempdata = data.filter((val) => val.id === idx);
    SetData(tempdata);
    // console.log(data);
    // console.log(tempdata);
  };
  useEffect(() => {
    filterdata(idx);
  }, []);
  return (
    <>
      <div className="collections2">
        {Data.map((mp, idx) => (
          <div key={idx} className="CardDetail">
            <img src={mp.img} className="CardContImg2" alt="cricket" />
            <div className="cardDesc">
              <div>{mp.name}</div>
              <div>Location: {mp.location}</div>
              <div>Date: {mp.date}</div>
              <div>Start Time: {mp.starttime}</div>
              <div>End Time: {mp.endtime}</div>
              <div>Capacity: {mp.totalpeople}</div>
              <button
                className="buyButton"
                onClick={() => {
                  SetShow(!Show);
                }}
              >
                Buy Now
              </button>
              <button
                className="backButton"
                onClick={() => {
                  navigate("/Collections");
                }}
              >
                Back
              </button>
              {Show && (
                <div className="connectionBtn">
                  <button className="connBtn" onClick={connect}>
                    {" "}
                    Connect Account
                  </button>
                  <button className="connBtn1" onClick={disconnect}>
                    {" "}
                    Disconnect Account
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="Walletcontainer">Wallet : {account}</div>
      </div>
    </>
  );
};

export default MainCard;
