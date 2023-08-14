import React from "react";
import logo from "../naruto-37644.png"

export default function Navbar(){
    return(
        <nav>
            <img src={logo} alt="logo" className="nav--logo" />
        </nav>
    )
}