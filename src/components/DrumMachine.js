import React, { useState } from "react";

const DrumMachine = () => {
  const [sound, setSound] = useState("");

  const handleClick = (e) => {
    setSound(e.target.id);
  };

  return (
    <>
      <div id="drum-machine">
        <div className="form-check form-switch" id="switch-div">
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
          <button className="drum-pad" id="Bld-H1" onClick={handleClick}>
            <audio src="../sounds/Bld-H1.mp3" autoplay/>
            Q
          </button>
          <button className="drum-pad" id="Brk_Snr" onClick={handleClick}>
            W
          </button>
          <button className="drum-pad" id="Dry_Ohh" onClick={handleClick}>
            E
          </button>
          <button className="drum-pad" id="Give_us_a_light" onClick={handleClick}>
            A
          </button>
          <button className="drum-pad" id="Heater-3" onClick={handleClick}>
            S
          </button>
          <button className="drum-pad" id="Heater-6" onClick={handleClick}>
            D
          </button>
          <button className="drum-pad" id="punchy_kick_1" onClick={handleClick}>
            Z
          </button>
          <button className="drum-pad" id="RP4_KICK_1" onClick={handleClick}>
            X
          </button>
          <button className="drum-pad" id="RP4_KICK_1" onClick={handleClick}>
            C
          </button>
        </div>
        <label id="display">{sound}</label>
      </div>
    </>
  );
};

export default DrumMachine;
