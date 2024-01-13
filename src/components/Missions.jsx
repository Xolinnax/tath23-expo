import React from "react";
import Bg from "../svgs/Bg.svg";
import Bg2 from "../svgs/Bg2.svg";
import stats from "../svgs/stats.svg";
import IEDCLogo from "../images/IEDCLogo.png";
import startupMobile from "../svgs/startupMobile.svg";
import IEDCMobile from "../svgs/IEDCMobile.svg";

export default function Missions()
{
    return (<>
            <div className="missions">
                <img className="backgroundSVG" src={Bg} alt="Background SVG" />
                <div className="missionText">
                    <pre className="missionHeader">KERALA{"\n"}STARTUP MISSION</pre>
                    <h2 className="missionDesc">Innovation and Entrepreneurship Development Centre (IEDC) is a flagship initiative of Kerala Startup Mission to promote innovation and entrepreneurship among the student and academic fraternity in the educational institutions in the state of Kerala and considered as an umbrella programme that would play an instrumental role in fostering innovation culture in academic institutions.</h2>
                    <img className="stats" src={stats} alt="stats of startup plan" />
                </div>
            </div>

            <div className="missions-2">
                <img className="backgroundSVG" src={Bg2} alt="Background SVG" />
                <img className="Logo" src={IEDCLogo} alt="IEDC Logo" />
                <div className="missionText">
                    <pre className="missionHeader-2">INnOVATION AnD {"\n"}EnTREPRENEURSHIP{"\n"}DEVELOPMENT CENTRE</pre>
                    <h2 className="missionDesc">The Kerala Startup Mission (KSUM) is the nodal agency of the government of Kerala for promoting entrepreneurship in the state. It is also the implementing body for the Kerala Technology Startup Policy that supports the state’s startup ecosystem through various schemes and support programs. KSUM was founded in 2006, with the goal to promote technology-based entrepreneurship activities and to create the infrastructure and ecosystem required to support high-end technology-based startup businesses. </h2>
                </div>
            </div>

            <img className="startupMobile" src={startupMobile} alt="startUp"/>            
            <div className="IEDCLogoMobile">
                <img className="LogoMobile" src={IEDCLogo} alt="IEDC Logo" />
            </div>
            <img className="IEDCMobile" src={IEDCMobile} alt="IEDC" />
        </>);
}