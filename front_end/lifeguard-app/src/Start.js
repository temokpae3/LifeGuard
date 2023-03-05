import * as React from 'react';
import './game.css';
import Computer_Screen from "./Computer_Screen.png";
import character1 from "./character1.png";
import character2 from "./character2.png";
import character3 from "./character3.png";
import character4 from "./character4.png";
import character5 from "./character5.png";
import character6 from "./character6.png";
import water_1 from "./1_7 water.jpg"

function Start() {
  return (
    <div className="start">
    <header className="start-header">
        <img
            style={{height: 700 }}
            src={Computer_Screen} />
            <img
                style={{height: 290, transform: 'translate(0%, -230%)'}}
                src={character6}
            />
            <img
                style={{height: 71.5, transform: 'translate(0%, -880%)'}}
                src={water_1}
            />
            <span
            style={{height: 290, transform: 'translate(-10%, -215%)'}}
            class="blink">_ _ _ _ _ _ _ _ _ _</span>
    </header>
    </div>
  );
}

export default Start;