import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import CubeSphere from "./CubeSphere";

import { useLocation } from "react-router-dom";
function Home() {
  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    var p = document.getElementById("text");
    p.innerHTML = "";
    var n = 0;
    var str = "Think outside of the box.";

    var typeTimer = setInterval(function () {
      n = n + 1;
      p.innerHTML = "" + str.slice(0, n);
      if (n === str.length) {
        clearInterval(typeTimer);
        p.innerHTML = "" + str;
        n = 0;
        setInterval(function () {
          if (n === 0) {
            p.innerHTML = "" + str + "|";
            n = 1;
          } else {
            p.innerHTML = "" + str;
            n = 0;
          }
        }, 500);
      }
    }, 60);
  }, []);
  return (
    <div className="container flex p-4 mt-2 flex-col mx-auto">
      <div className="three-container">
        <div className="canvas_wrapper">
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 0, 0]} />
            {/* <CubeSphere /> */}
          </Canvas>
        </div>
      </div>
      <h1
        className="text-black mt-8 prose prose-2xl text-3xl typing-text"
        id="text"
      ></h1>
    </div>
  );
}

export default Home;
