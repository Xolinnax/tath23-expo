import React from "react";
import whyImg from "../images/whyIMG.png";
import vertCard1 from "../svgs/vert-card1.svg";
import vertCard2 from "../svgs/vert-card2.svg";
import vertCard3 from "../svgs/vert-card3.svg";
import vertCard4 from "../svgs/vert-card4.svg";
import vertCard5 from "../svgs/vert-card5.svg";

export default function Why()
{
    return (
        <div className="why">
            <h1 className="whyText">WHY interface startup summit ?</h1>
            <div className="whyContainer">
                <div className="whyImageContainer">
                    <img className="whyImage" src={whyImg} alt="An aesthetic and minimalistic poster on expo similar to one seen on website" />
                </div>
                <div className="cardContainer-1">
                    <img className="cardSVG" src={vertCard1} alt="StartUp Expo"/>
                    <img className="cardSVG" src={vertCard2} alt="StartUp Expo"/>
                    <img className="cardSVG" src={vertCard3} alt="StartUp Expo"/>
                </div>
                <div className="cardContainer-2">
                    <img className="cardSVG" src={vertCard4} alt="StartUp Expo"/>
                    <img className="cardSVG" src={vertCard5} alt="StartUp Expo"/>
                </div>
            </div>
        </div>);
}