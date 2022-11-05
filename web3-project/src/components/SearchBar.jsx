import React, { useState } from "react";
import "../assets/css/Collections.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CardDescriptionPage from "./CardDescriptionPage";
const SearchBar = () => {
  const [show, setShow] = useState(false);
  const [SearchData, SetSearchData] = useState("");
  const [InputData , SetInputData] = useState("");
  const [Clicked , SetClicked] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Change = (e)=>{
    SetInputData(e.target.value);
    // console.log(e.target.value);
  }
  const handle_submit = (input)=>{
    SetSearchData(input);
    SetClicked(!Clicked);
    // console.log(input);
  }
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <div className="SearchBarLeft">
          <div className="SearchBarOption">Sports</div>
          <div className="SearchBarOption">Movies</div>
          <div className="SearchBarOption">Concert</div>
          <div className="SearchBarOption">Event</div>
        </div>
      </Offcanvas>
      <div className="SearchBarTicket">
        <Button variant="primary" onClick={handleShow}>
          <i class="bi bi-menu-button-wide"></i>
        </Button>
        <div className="SearchBarCont2">
          <input required className="SearchBarSearchTicket" onChange={Change} type="text"></input>
          <button className="SearchBarSubmit" onClick={()=>{handle_submit(InputData)}}>Search</button>
        </div>
      </div>
      {
        Clicked && <CardDescriptionPage searchdata={SearchData} />
      }
    </>
  );
};

export default SearchBar;
