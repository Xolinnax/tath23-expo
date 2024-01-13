import React from "react";
import panel from "../images/Panel.png";
import image360 from "../images/360.png";
import wikipedia from "../images/wikipedia.png";
import monopoly from "../images/monopoly.png";
import startup from "../images/startup.png";
import AI from "../images/AI.png";
import career from "../images/career.png";
import standup from "../images/standup.png";

export default function Events()
{
    return (
        <div className="Events">
            <div className="eventsGrid">
                <img className="eventIMG" src={panel} alt="Panel" />
                <img className="eventIMG" src={image360} alt="360" />
                <img className="eventIMG" src={wikipedia} alt="Wikipedia" />
                <img className="eventIMG" src={monopoly} alt="Monopoly" />
            </div>            
            <div className="eventsGrid">
                <h2 className="ourEvents">OUR EVENTS</h2>
                <img className="eventIMG" src={startup} alt="Startup" />
                <img className="eventIMG" src={AI} alt="AI" />
                <img className="eventIMG" src={career} alt="Career" />
                <img className="eventIMG" src={standup} alt="Standup" />
            </div>
        </div>);
}