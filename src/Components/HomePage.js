import React, { useState , useRef } from "react";
import HomeHeader from "./HomeHeader";
import LikeButton from "./heart.svg";
import CommentButton from "./chat.svg";
import Data from "../Posts.json";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import CommentData from "../Comments.json";
import { AiFillHeart } from "react-icons/ai";

import { FaRegCommentAlt } from "react-icons/fa";

const HomePage = () => {
  //console.log(CommentData)
  const [model, SetModel] = useState(false);
  const [myId, SetmyId] = useState(0);
  const [CommentPic, SetCommentPic] = useState("");
  const [Btncolor, setBtncolor] = useState("black");
  const [FilteredCommentData, SetFilteredCommentData] = useState(CommentData);
  //const [modal, setModal] = useState(false);
  const ref = useRef(null);
  function btn(event) {
    if (Btncolor === "black") {
      setBtncolor("red");
    } else if (Btncolor === "red") {
      setBtncolor("black");
    }
  }
  function btnClick() {
    console.log(myId);
    let myCommentData = FilteredCommentData.filter(
      (myData) => myData.PostId === myId
    );
    SetFilteredCommentData(myCommentData);
    console.log(FilteredCommentData);
  }

  // const [comment, SetComment] = useState(style={});

  return (
    <>
      <div className="container postcontainer">
        <HomeHeader />
        <hr />
        {Data.map((arr, index) => {
          return (
            <div key={index}>
              <div className="row">
                <div className="col-md-1 my-1">
                  <center>
                    <img
                      className="ProfilePic ml-2"
                      src={arr.ProfilePic}
                      alt=""
                    />
                  </center>
                </div>
                <div className="col-md-6 my-3">
                  <div className="row">
                    <div className="col-md-12">
                      <Link to={`/Profile/${arr.UserId}`}>{arr.UserId} </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">{arr.ProfileDesc}</div>
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
              <div className="row postImage">
                <div className="col-md-12 imgcol">
                  <img src={arr.Picture} style={{ width: "100%" }} alt="" />
                </div>
              </div>
              <div className="row ">
                <div className="col-md-1 heart ml-2 ">
                  <AiFillHeart onClick={btn} fill={Btncolor} />

                  <img
                    src={CommentButton}
                    className="ml-3 "
                    style={{ width: "45px", height: "55px" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 ">
                  <p className="ml-4">{arr.UserName}</p>
                </div>
                <div className="col-md-10">
                  <p className="ml-6">{arr.PostDesc}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 ">
                  <button
                    className="Commentsbtn btn ml-3"
                    onClick={() => {
                      btnClick();
                      SetModel(true);
                      SetmyId(arr.PostId);
                      SetCommentPic(arr.Picture);
                    }}
                  >
                    View All Comments
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                    style={{ visibility: "hidden" }}
                    ref={ref}
                  >
                    Large modal
                  </button>

                  <div
                    class="modal fade bd-example-modal-lg"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">...</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="ml-4">{arr.PostTime}</p>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
