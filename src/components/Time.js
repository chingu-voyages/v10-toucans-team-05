import React from "react";

const Time = () => {
  const time = new Date();
  let hours = time.getHours();
  hours = hours < 10 ? `0${hours}` : "";
  const minutes = time.getMinutes();
  return (
    <div className="time">
      <h2>
        {hours}:{minutes}
      </h2>
    </div>
  );
};

export default Time;
