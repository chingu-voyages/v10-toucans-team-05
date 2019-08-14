import React from "react";
import Todo from "./Todo";
import Quote from "./Quote";
import Settings from "./Settings";
const LowerContainer = ({ imageInfo }) => {
  return (
    <div className="lower-container">
      <Settings imageInfo={imageInfo} />
      <Quote />
      <Todo />
    </div>
  );
};

export default LowerContainer;
