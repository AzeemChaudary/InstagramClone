import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import icon from "./chevron-left.svg";
import Data from '../ProfileData.json'
const Profile = () => {
    let {UserId}=useParams();
    let [profile,setProfile]=useState(Data);
    useEffect(()=>{
let newData=Data.filter(myData=>myData.UserId===UserId);
setProfile(newData);
    },[])
  return (
    <div className="container-fluid">
      <div className="row my-2 ml-3">
        <div className="col-md-1">
          <img src={icon} />
        </div>
        <div className="col-md-10">
          <center>{profile[0].UserId}</center>
        </div>
      </div>
      <div className="row ml-3">
        <div className="col-md-3">
          <img
            className="ProfilePic"
            src={profile[0].ProfilePic}
          />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <div className="row ml-3">
            <div className="col-md-4 my-2">
             <b> <h6>{profile[0].Posts}</h6> <p>Posts</p></b>
            </div>
            <div className="col-md-4 my-2">
             <b> <h6>{profile[0].Followers}</h6> <p>Followers</p></b>
            </div>
            <div className="col-md-4 my-2">
             <b> <h6>{profile[0].Following}</h6> <p>Following</p></b>
            </div>
          </div>
        </div>
      </div>
      <div className="row ml-3">
        <div className="col-md-12">
          <h6>{profile[0].UserName}</h6>
        </div>
        {/* <div className="col-md-12">
          <h6>{profile[0].UserName}</h6>
        </div> */}
        <div className="col-md-12">
          <h6>{profile[0].ProfileDetail}</h6>
        </div>
        <div className="col-md-12">
          <h6>{profile[0].UserWeb}</h6>
        </div>
        <div className="col-md-2">
          <button type="button" class="btn btn-secondary">
            Message
          </button>
        </div>
      </div>

    

      <div className="row mt-3">
        <div className="col-md-4 profileimg" >
          <img src={profile[0].Images[0]} style={{width:"100%"}} />
        </div>
        <div className="col-md-4 profileimg" >
          <img src={profile[0].Images[1]} style={{width:"100%"}} />
        </div>
        <div className="col-md-4 profileimg" >
          <img src={profile[0].Images[2]} style={{width:"100%"}} />
        </div>
       
      </div>
     </div>
  );
};

export default Profile;
