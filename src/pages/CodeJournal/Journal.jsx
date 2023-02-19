import React from "react";
import HTMLReactParser from "html-react-parser";
import Linux from "./journals/easy-linux.html?raw";

function Journal() {
  return <>{HTMLReactParser(Linux)}</>;
}

export default Journal;
