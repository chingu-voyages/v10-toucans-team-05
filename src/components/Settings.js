import React, { useEffect } from "react";

import { imageDetails } from "../utils";
const Settings = ({ imageInfo }) => {
  {
    console.log(imageInfo);
  }
  return (
    <div className="settings">
      <i className="fas fa-cog white" />
      <section className="author-info mt-5">
        <div className="white">{imageInfo.description}</div>

        <div className="white">{imageInfo.name} / Unsplash</div>
      </section>
    </div>
  );
};

export default Settings;
