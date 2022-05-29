import React, { useState } from "react";

const DrumMachine = () => {
  const [sound, setSound] = useState("");

  const handleClick = (e) => {
    setSound(e.target.id);
  };

  return (
    <>
      <div id="drum-machine">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" for="flexSwitchCheckDefault">
            Power
          </label>
        </div>
        <div id="keypad">
          <button className="drum-pad" id="sound-1" onClick={handleClick}>
            Q
          </button>
          <button className="drum-pad" id="sound-2" onClick={handleClick}>
            W
          </button>
          <button className="drum-pad" id="sound-3" onClick={handleClick}>
            E
          </button>
          <button className="drum-pad" id="sound-4" onClick={handleClick}>
            A
          </button>
          <button className="drum-pad" id="sound-5" onClick={handleClick}>
            S
          </button>
          <button className="drum-pad" id="sound-6" onClick={handleClick}>
            D
          </button>
          <button className="drum-pad" id="sound-7" onClick={handleClick}>
            Z
          </button>
          <button className="drum-pad" id="sound-8" onClick={handleClick}>
            X
          </button>
          <button className="drum-pad" id="sound-9" onClick={handleClick}>
            C
          </button>
        </div>
        <label id="display">{sound}</label>
      </div>
    </>
  );
};

export default DrumMachine;
