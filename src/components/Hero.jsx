import React from "react";
import "../App.css"
import HeroSVG from "../svgs/HeroSVG.jsx";
import GreenEllipse from "../svgs/GreenEllipse.jsx";
import GrayEllipse from "../svgs/GrayEllipse.jsx";

export default function Hero()
{
    return(
        <div className="hero">
            <HeroSVG />
            <GreenEllipse 
                ellipseNo="greenEllipse green-1"
            />
            <GreenEllipse
                ellipseNo="greenEllipse green-2 "
            />

            <GrayEllipse
                ellipseNo="grayEllipse gray-1"
            />
            <GrayEllipse
                ellipseNo="grayEllipse gray-2"
            />

            <div>
                <pre className="heroText">
                    INTERFACE{"\n"}
                    STARTUP{"\n"}
                    SUMMIT
                </pre>
                <pre className="heroSideKick">
                    Malabar’s  largest  startup  summit
                </pre>
            </div>
        </div>);
}