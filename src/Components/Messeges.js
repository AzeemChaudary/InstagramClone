import React, { useEffect, useState } from "react";
import logo from "./chevron-left.svg";
import search from "./search.svg";
import Data from "../ProfileData.json";
import { Link, useParams } from "react-router-dom";
import HomePageData from '../Posts.json';
import MessageLists from '../MessagesList.json'

const Messeges = () => {
  let {userID}=useParams();
  let {Receiver}=useParams();
  let [profile,SetProfile]=useState(HomePageData);
  let [MessageData,SetMessageData]=useState(MessageLists)
  useEffect(()=>{
 let ProfileData=   profile.filter((mydata)=>mydata.UserId===userID)
   let MsgData= MessageData.filter((mydata)=>mydata.Receiver===Receiver)
   SetProfile(ProfileData)
   SetMessageData(MsgData)
  },[])
  return (
    <>
      <div className="container msg">
        <div className="row msgrow my-2">
          <div className="col-md-1">
            <img src={logo} />
          </div>
          <div className="col-md-11">
            <h4>
              <center>{Receiver}</center>
            </h4>
          </div>
        </div>
        <div className="col-md-12">
          <div className="searchmsg">
            <img className="Msgimg" src={search} />
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </div>

        {
        MessageData.map((value, index) => {
          return (
            <div className="row">
              <div className="col-md-1 my-1">
                <center>
                  <img className="ProfilePic" src={value.SenderProfilePc} />
                </center>
              </div>
              
                <div className="col-md-6 my-3">
                {/* Link to={`/Profile/${userID}/${profile[0].userName} */}
                <Link to={`/OnetoOneMesseges/${userID}/${profile[0].UserName}/${value.MessageID}`}>
                  <div className="row">
                    <div className="col-md-12">{value.SenderName}</div>
                  </div></Link>
                  <div className="row">
                    <div className="col-md-12">{value.Messages}</div>
                  </div>
                </div>
              
              <div className="col-md-4"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Messeges;
