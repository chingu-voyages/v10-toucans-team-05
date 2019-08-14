import React, { useEffect, useState } from "react";
import "./styling/App.css";
import TopContainer from "./components/TopContainer";
import MiddleContainer from "./components/MiddleContainer";
import LowerContainer from "./components/LowerContainer";

import { imageDetails } from "./utils";

const App = () => {
  const [image, setImage] = useState("");
  const [imageAuthor, setImageAuthor] = useState({
    name: "",
    description: ""
  });
  const backgroundImage = {
    backgroundImage: `url( ${image} )`,
    padding: "1%",
    height: "100vh",
    width: "100%",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };
  useEffect(() => {
    async function getImageDets() {
      let imageDets = await imageDetails();
      console.log(imageDets);
      setImageAuthor({
        name: imageDets.user.name,
        description: imageDets.alt_description
      });
      setImage(imageDets.urls.full);
    }
    getImageDets();
  }, []);

  return (
    <div className="app" style={backgroundImage}>
      <TopContainer />
      <MiddleContainer />
      <LowerContainer imageInfo={imageAuthor} />
    </div>
  );
};

export default App;
