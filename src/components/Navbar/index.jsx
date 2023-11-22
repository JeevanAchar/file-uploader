import React from "react";
import logo from "../../assets/logo.svg"
import "./style.scss"

function Navbar() {
    return (
        <div className="navbar-block">
            <img src={logo} alt="" />
            <h2>Your Projects</h2>
        </div>
    )
}
export default Navbar;
