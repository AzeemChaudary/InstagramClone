import React, { useEffect, useState } from "react";
import icon from "./chevron-left.svg";
import Msgs from '../Messages.json'
import { useParams } from "react-router-dom";
const OnetoOneMesseges = () => {
  const [OnetoOneMsgs , setOnetoOneMsgs] = useState(Msgs);
let {MessageID} = useParams();
console.log(OnetoOneMsgs)
useEffect(()=>{
    let m = OnetoOneMsgs.filter(MsgData => MsgData.MessageID === MessageID);
    setOnetoOneMsgs(m);
    
     // src={OnetoOneMsgs[0].SenderProfilePc}
    //<p>{OnetoOneMsgs[0].SenderName}</p>
},[])
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-md-1 mt-3">
            <img src={icon} style={{ width: "50px" }} />
          </div>
          <div className="col-md-1">
            <center>
              <img
                className="ProfilePic"
                src={OnetoOneMsgs[0].SenderProfilePc}
              />
            </center>
          </div>
          <div className="col-md-2 mt-3">
            <p>{OnetoOneMsgs[0].SenderName}  
           
             </p>
          </div>
        </div>
        {/* {
        OnetoOneMsgs.map((inbox, index)=>{
                return(
                    <div id='messageContent' key={index}>
                    <span id='messagePic'>
                                <img src={inbox.SenderProfilePc} alt="messenger"/>
                    </span>
                    <span id='message1'>{inbox.Receive}</span>
                    <span id='message2'>{inbox.Send}</span>
                </div>
                )
            })
            
            } */}
        {
          OnetoOneMsgs.map((value,index)=>{
       return(
        <>
        <div className="row"  key={index}>
          <div className="col-md-1">
            <center>
              <img
                className="ProfilePic chatimg"
                src={value.SenderProfilePc}
              />
            </center>
          </div>
          <div className="col-md-11 " >
            <div className="rounded chattxt">
            <p>
            {value.Receive}
            </p></div>
          </div>
          
        </div>
        <div className="row"  >
        <div className="col-md-5">

        </div>
        <div className="col-md-7">
        <div className="rounded chattxt">
        <p>
        {value.SenderName}
        </p></div>
        </div>
    </div>
        </>
        )
       })
       }
      </div>
    </>
  );
};

export default OnetoOneMesseges;
