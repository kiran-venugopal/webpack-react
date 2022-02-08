import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function MainPage() {
  return <div className="main-page"> Hello TSX !!! </div>;
}

ReactDOM.render(<MainPage />, document.getElementById("root"));
