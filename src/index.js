import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

const Index = () => {
    console.log("----search", Search)
  return (
    <div>
      {/* Hello React, hello, zhizhang! */}
      <Search/>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
