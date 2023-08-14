import React from "react";
import star from "../star.png";

export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <img src={`./Images/${props.img}`} alt="naruto" className="card--img" />
            <div className="card-stats">
                 <img src={star} alt="star" className="card--star" />
                 <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.name}</p>
            <p className="card--clan">{props.clan}</p>
        </div>
    )
}