import * as React from 'react';
import './game.css';
import Computer_Screen from "./Computer_Screen.png";
import character1 from "./character1.png";
import character2 from "./character2.png";
import character3 from "./character3.png";
import character4 from "./character4.png";
import character5 from "./character5.png";
import character6 from "./character6.png";


function Start() {
  return (
    <div className="start">
    <header className="start-header">
        <img
            style={{height: 700 }}
            src={Computer_Screen} />
            <img
                style={{height: 300, transform: 'translate(0%, -230%)'}}
                src={character3}
            />
    </header>
    </div>
  );
}

export default Start;