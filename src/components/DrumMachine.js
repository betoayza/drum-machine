import React from "react";

const DrumMachine = () => {
  return (
    <div id="drum-machine">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <button className="drum-pad"></button>
      <button className="drum-pad"></button>
      <button className="drum-pad"></button>
      <button className="drum-pad"></button>
      <button className="drum-pad"></button>
      <button className="drum-pad"></button>
      <button className="drum-pad"></button>
      <button className="drum-pad"></button>
      <button className="drum-pad"></button>
    </div>
  );
};

export default DrumMachine;
