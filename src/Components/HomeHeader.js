import React from "react";
import Logo from "./Instagram_Logo.png";
import ChevronIcon from "./chevron-down.svg";
import MessengerIcon from "./messenger.svg";
import { Link } from "react-router-dom";
import Messeges from "./Messeges";

const HomeHeader = () => {
  return (
    <div className="row">
      <div className="col-md-3 my-3">
        <img className="InstaLogo ml-2" src={Logo} />
        <img src={ChevronIcon} />
      </div>
      <div className="col-md-8"></div>
      <div className="col-md-1 my-3">
     
      <Link to={"/Messeges/azeem_choudhary104/Azeem Chaudary"} >
        <img
          className="MessengerIcon"
          src={MessengerIcon}
        />
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
