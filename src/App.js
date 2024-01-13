import React from "react";
import "./App.css"
import Hero from "./components/Hero.jsx";
import Sidekick from "./components/Sidekick.jsx";
import Why from "./components/Why.jsx";
import Missions from "./components/Missions.jsx";
import TechnaVista from "./components/TechnaVista.jsx";
import Innoverse from "./components/Innoverse.jsx";
import Events from "./components/Events.jsx";

import star from "./svgs/star.svg";
import clockSVG from "./svgs/clockSVG.svg";
import blueEndSVG from "./svgs/blueEndSVG.svg";
import pinkEndSVG from "./svgs/pinkEndSVG.svg";

function App() 
{
  return (
    <div className="App">
        <Hero />
        <Sidekick />
        <Why />
        <Missions />

        <div className="star">
            <img className="starSVG" src={star} alt="star"/>
        </div>

        <TechnaVista />

        <div className="clock">
            <img className="clockSVG" src={clockSVG} alt="clockSVG"/>
        </div>

        <Innoverse />

        <div className="blueEnd">
            <img className="blueEndSVG" src={blueEndSVG} alt="blueSVG at end of page" />
        </div>

        <div className="pinkEnd">
            <img className="pinkEndSVG" src={pinkEndSVG} alt="pinkSVG at end of page" />
        </div>

        <Events />
    </div>
  );
}

export default App;
