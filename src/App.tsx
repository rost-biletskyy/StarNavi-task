import React from "react";
import "./App.scss";
import PickMode from "./components/pickMode/PickMode";
import Squares from "./components/squares/Squares";
import HoverSquares from "./components/hoverSquares/HoverSquares";

function App() {
  return (
    <div className="container">
      <div className="container__play">
        <PickMode />
        <Squares />
      </div>
      <HoverSquares />
    </div>
  );
}

export default App;
