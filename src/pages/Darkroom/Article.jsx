import React from "react";
import HTMLReactParser from "html-react-parser";
import Carnival from "./articles/article-one.html?raw";

function Article() {
  return <>{HTMLReactParser(Carnival)}</>;
}

export default Article;
