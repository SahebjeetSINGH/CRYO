import React, { useState } from "react";
import "../assets/css/Collections.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CardDescriptionPage from "./CardDescriptionPage";
const SearchBar = () => {
  const [show, setShow] = useState(false);
  const [SearchData , SetSearchData] = useState("comicon");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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
          <div>
          <Button variant="primary" onClick={handleShow}>
          <i class="bi bi-menu-button-wide"></i>
          </Button>
          {/* <div>
            djdojpdokjpdk
          </div> */}
      </div>

      <CardDescriptionPage searchdata = {SearchData} />
    </>
  );
};

export default SearchBar;
