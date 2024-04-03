import React from "react";
import "./style.scss";
import HeaderImage from "../../assets/image/HeaderImage";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { GiCheckMark } from "react-icons/gi";
const Header = () => {
  const {
    firstPicture,
    secondPicture,
    thirdPicture,
    fourthPicture,
    fifthPicture,
    sixthPicture,
    seventhPicture,
    vectorOne,
    vectorTwo,
    fillOne,
  } = HeaderImage;
  const commits = [
    "Easy payment",
    "24/7 Customer Support",
    "Return & Refund Policy",
  ];
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="first-commitment">
            {commits.map((value, index) => {
              return (
                <div key={index} className="commit">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p> {value} </p>
                </div>
              );
            })}
          </div>
          <div className="content">
            <div className="header-side-content">
            <div className="third-side">
                  {sixthPicture}
                  {seventhPicture}
                </div>
              {/* <div className="second-commitment">
                Getting the best and latest products has never been easier.
              </div>
              <div className="third-commitment">
                {" "}
                <span>J Heritage </span> is a platform that helps you get the
                right products for all demands to your house.{" "}
              </div> */}
              <button className="shop-collection-btn"> Shop collections</button>
            </div>
            <div className="header-side-image">
              <div className="first-side">
                {vectorOne}
                {firstPicture}
              </div>
              <div className="second-side">
                {vectorTwo}
                {secondPicture}
                <div className="list-img">
                  {thirdPicture}
                  {fourthPicture}
                  {fifthPicture}
                </div>
                
              </div>
            </div>
          </div>
        </div>
        {fillOne}
      </div>

      <div className="advert-section">
        <div className="advert">
          <p className="first">
          Getting the best and latest products has never been easier.{" "}
          </p>
          <p>
          <span>J Heritage </span> is a platform that helps you get the
                right products for all demands to your house.
          </p>
          {/* <p>-Daniel-</p> */}
        </div>
      </div>
    </>
  );
};

export default Header;
