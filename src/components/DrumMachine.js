import React from "react";

const DrumMachine = () => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    <div id="drum-machine">
      <button className="drum-pad">Q</button>
      <button className="drum-pad">W</button>
      <button className="drum-pad">E</button>
      <button className="drum-pad">A</button>
      <button className="drum-pad">S</button>
      <button className="drum-pad">D</button>
      <button className="drum-pad">Z</button>
      <button className="drum-pad">X</button>
      <button className="drum-pad">C</button>
      <label id="display">asdasd</label>
    </div>
    </>
  );
};

export default DrumMachine;
