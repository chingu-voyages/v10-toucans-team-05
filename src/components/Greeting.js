import React from "react";

const Greeting = () => {
  //get name
  // let name = prompt("What is your name?");
  let name = "Vonetta";
  //get time
  const time = new Date();
  let hours = time.getHours();
  hours = hours < "10" ? `0${hours}` : `${hours}`;
  let minutes = time.getMinutes();
  minutes = minutes < "10" ? `0${minutes}` : `${minutes}`;

  //get greeting
  const getGreeting = hours => {
    if (hours < "12") {
      return "morning";
    } else if (hours < "17") {
      return "afternoon";
    } else {
      return "evening";
    }
  };

  let greeting = getGreeting(hours);
  return (
    <>
      <section className="greeting white">
        <div>
          <h2>
            {hours}:{minutes}
          </h2>
        </div>
        <div>
          <p>
            Good {greeting}, {name}
          </p>
        </div>
      </section>
    </>
  );
};

export default Greeting;
