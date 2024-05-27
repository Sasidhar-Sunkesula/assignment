import React from "react";
import BackButton from "./BackButton";
import "./finalScreen.css"
const FinalScreen = ({ bananas, onRestart, onBack }) => {
  return (
    <div className="final-screen">
      <BackButton onBack={onBack} />
      {/* <h1>Game Over</h1>
      <p>Total Matches: {bananas}</p>
      <button onClick={onRestart}>Restart</button> */}
      <img src="final.png" alt="final" className="final" />
    </div>
  );
};

export default FinalScreen;
