import React, { useState } from "react";
import { Bounce } from "react-activity";

import "react-activity/dist/library.css";

function LoadingOverlay() {
  return (
    <div className="centre flex justify-center items-center loading-overlay z-100">
      <div className="centre-container">
        <div className="flex flex-col justify-center items-center mt-5 animate-pulse duration-75">
          <Bounce color="black" size={50} />
        </div>
      </div>
    </div>
  );
}

export default LoadingOverlay;
