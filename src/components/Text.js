import React from "react"
import wiki from '../img/wiki.jpg'

export default function Text() {
    return (
        <div className="informationText">
            <span className="normalText">Reserve Efficiency this is yours</span>
            <span className="blueText"> #% Increased Mana Reservation Efficiency of Skills</span>

            <img src={wiki} alt="wiki" width="1000px" height="250px" /> 
        </div>
    )
}