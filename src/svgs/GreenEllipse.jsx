import React from "react";

export default function GreenEllipse(props)
{
    return (
    <svg width="68" height="71" viewBox="0 0 68 71" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.ellipseNo}>
            <ellipse cx="33.9356" cy="35.2027" rx="32.9333" ry="35.2471" transform="rotate(-19.851 33.9356 35.2027)" fill="url(#paint0_linear_325_209)"/>
            <defs>
            <linearGradient id="paint0_linear_325_209" x1="33.9356" y1="-0.0443535" x2="33.9356" y2="70.4498" gradientUnits="userSpaceOnUse">
            <stop stop-color="#90F2A0"/>
            <stop offset="0.431939" stop-color="#55B7C5" stop-opacity="0.621356"/>
            <stop offset="1" stop-color="#DCA437" stop-opacity="0.25"/>
            </linearGradient>
            </defs>
    </svg>
    )
}