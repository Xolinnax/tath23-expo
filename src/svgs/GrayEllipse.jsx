import React from "react";

export default function GrayEllipse(props)
{
    return (
        <svg width="127" height="134" viewBox="0 0 127 134" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.ellipseNo}>
            <g filter="url(#filter0_bii_325_206)">
            <ellipse cx="63.8248" cy="67.2329" rx="62.3602" ry="66.7415" transform="rotate(-19.851 63.8248 67.2329)" fill="#D9D9D9" fill-opacity="0.01"/>
            </g>
            <defs>
            <filter id="filter0_bii_325_206" x="-10.2373" y="-10.2002" width="148.124" height="154.866" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.58205"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_325_206"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_325_206" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1.39551"/>
            <feGaussianBlur stdDeviation="1.67461"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_325_206"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-1.39551"/>
            <feGaussianBlur stdDeviation="2.09327"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="effect2_innerShadow_325_206" result="effect3_innerShadow_325_206"/>
            </filter>
            </defs>
        </svg>
    )
}