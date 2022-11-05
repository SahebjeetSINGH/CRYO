import React, { useEffect, useState } from "react";
import Card from "./TeamCard";
import "../assets/css/CardArea.css";
import LoadingSpinner from "./LoadingSpinner";
import tiger1 from "../assets/images/NFT 1.png";
import tiger2 from "../assets/images/NFT 2.png";
import tiger3 from "../assets/images/NFT 3.png";
import tiger4 from "../assets/images/NFT 4.png";

const CardArea = () => {
  const [formData, setformData] = useState([""]);
  // const r = Math.floor(Math.random()*4+1);
  const arr = [tiger1, tiger2, tiger3, tiger4];
  // useEffect(() => {

  // }, [third])
  const data = [
    {
      Name: "Karan Bagga",
      Linkedin: "djdkjd",
      Instagram: "djdjd",
      Twitter: "Djdjdd",
    },
    {
      Name: "Sahebjeet Singh",
      Linkedin: "djdkjd",
      Instagram: "djdjd",
      Twitter: "Djdjdd",
    },
    {
      Name: "Unnat Das",
      Linkedin: "djdkjd",
      Instagram: "djdjd",
      Twitter: "Djdjdd",
    }
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
    setformData(data);
  }, []);


  return (
    <>
        <div className="cardareaa">
          {formData.map((item, index) => {
            return (
              <Card
                key={index}
                formData={item}
                img={arr[Math.floor(Math.random() * 4)]}
              />
            );
          })}
        </div>
    </>
  );
};

export default CardArea;
