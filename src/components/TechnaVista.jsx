import React from "react";
import technaVista from "../svgs/technavista.svg";
import technaVistaMobile from "../svgs/technavistaMobile.svg";

export default function TechnaVista()
{
    return (
    <div className="technavista">
        <h1 className="technavistaHeader">TECHNAVISTA</h1>
        <img className="technavistaSVG" src={technaVista} alt="technavista" />
        <div className="mobile">
            <img className="technavistaSVGMobile" src={technaVistaMobile} alt="technavsita" />
        </div>
    </div>);
}