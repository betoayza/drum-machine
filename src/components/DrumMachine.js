import React, { useRef, useState } from "react";

const DrumMachine = () => {
  const [sound, setSound] = useState("");
  const refSound = useRef(null);

  const handleClick = (e) => {
    console.log(e);
    setSound(e.target.id);
    // if (refSound !== null) {
    //   console.log(refSound.current);
    //   refSound.current
    //     .play()
    //     .then(() => {})
    //     .catch((error) => error);
    // }    

    const audio=document.getElementById(e.target.firstChild.id);
    audio.play()
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
          />

          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Power
          </label>
        </div>

        <div id="keypad">

          <div className="drum-pad" id="Bld-H1" value="Q" onClick={handleClick}>
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
              type="audio/mpeg"
              className="clip"
              id="Q"
              ref={refSound}
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
              ref={refSound}
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
              ref={refSound}
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
              ref={refSound}
            >
              Error
            </audio>
            A
          </div>
          <div className="drum-pad" id="Dsc_Oh" value="S" onClick={handleClick}>
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              type="audio/mpeg"
              className="clip"
              id="S"
              ref={refSound}
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
              ref={refSound}
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
              ref={refSound}
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
              ref={refSound}
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
              ref={refSound}
            >
              Error
            </audio>
            C
          </div>
        </div>
        <label id="display">{sound}</label>
      </div>
    </>
  );
};

export default DrumMachine;
