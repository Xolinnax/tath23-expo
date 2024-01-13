import React from "react";
import innoverse from "../svgs/innoverse.svg";
import innoverseMobile from "../svgs/innoverseMobile.svg";

export default function Innoverse()
{
    return(
        <div className="innoverse">
            <h1 className="innoverseHeader">INNOVERSE</h1>
            <img className="innoverseSVG" src={innoverse} alt="innoverse" />
            <img className="innoverseSVGMobile" src={innoverseMobile} alt="innoverse" />
        </div>
    );
}