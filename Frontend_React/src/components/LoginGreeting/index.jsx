import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./style.scss";
const LoginGreeting = (props) => {
  return (
    <div className="login-greeting">
      <div className="first">
        <Typewriter words={[props.text]} />
      </div>
      <div className="second">
        {props.type === "login" &&
          "Sign in for a personalized shopping experience."}{" "}
        {props.type === "register" &&
          "Sign up for a personalized shopping experience."}
        {(props.type === "forgot-password" ||
          props.type === "reset-password") &&
          "Enter your email address, and you will be back in no time."}
      </div>
      <div className="third">
      Explore the premier destination for all your furniture essentials.
      We transcend mere online retail, curating a refined selection of top-quality, 
      must-have furniture pieces sourced globally. 
      Our commitment is to elevate your living space, 
      ensuring you experience both comfort and style with every item. 
      Join us in transforming your home, one exquisite piece at a time.
      </div>
    </div>
  );
};

export default LoginGreeting;
