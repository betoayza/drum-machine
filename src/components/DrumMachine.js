import React, { useState } from "react";

const DrumMachine = () => {
  const [sound, setSound] = useState(null);
  const [on, setOn] = useState(false);
  
  const handleClick = async (e) => {
    //console.log(e);
    console.log("6) https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#fromHistory");
    setSound(e.target.id);

    const audio = document.getElementById(e.target.firstElementChild.id);

    await audio
      .play()
      .then(() => {})
      .catch((error) => error); 
       
  };

  return (
    <>
      <div id="drum-machine">
        <div className="form-check form-switch" id="switch-div">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onChange={() => {
              setOn(!on);
              setSound(null);
            }}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Power
          </label>
        </div>

        {on && (
          <div id="keypad">
            <div
              className="drum-pad"
              id="Bld-H1"
              value="Q"
              onClick={handleClick}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
                type="audio/mpeg"
                className="clip"
                id="Q"
              >
                Error
              </audio>
              Q
            </div>

            <div
              className="drum-pad"
              id="Brk_Snr"
              value="W"
              onClick={handleClick}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
                type="audio/mpeg"
                className="clip"
                id="W"
              >
                Error
              </audio>
              W
            </div>
            <div
              className="drum-pad"
              id="Give_us_a_light"
              value="E"
              onClick={handleClick}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
                type="audio/mpeg"
                className="clip"
                id="E"
              >
                Error
              </audio>
              E
            </div>
            <div
              className="drum-pad"
              id="Heater-2"
              value="A"
              onClick={handleClick}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                type="audio/mpeg"
                className="clip"
                id="A"
              >
                Error
              </audio>
              A
            </div>
            <div
              className="drum-pad"
              id="Dsc_Oh"
              value="S"
              onClick={handleClick}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                type="audio/mpeg"
                className="clip"
                id="S"
              >
                Error
              </audio>
              S
            </div>
            <div
              className="drum-pad"
              id="RP4_KICK_1"
              value="D"
              onClick={handleClick}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                type="audio/mpeg"
                className="clip"
                id="D"              
              >
                Error
              </audio>
              D
            </div>
            <div
              className="drum-pad"
              id="side_stick_1"
              value="Z"
              onClick={handleClick}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
                type="audio/mpeg"
                className="clip"
                id="Z"               
              >
                Error
              </audio>
              Z
            </div>
            <div
              className="drum-pad"
              id="Dry_Ohh"
              value="X"
              onClick={handleClick}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
                type="audio/mpeg"
                className="clip"
                id="X"                
              >
                Error
              </audio>
              X
            </div>
            <div
              className="drum-pad"
              id="punchy_kick_1"
              value="C"
              onClick={handleClick}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
                type="audio/mpeg"
                className="clip"
                id="C"              
              >
                Error
              </audio>
              C
            </div>
          </div>
        )}
        <label id="display">{sound}</label>
      </div>
    </>
  );
};

export default DrumMachine;
