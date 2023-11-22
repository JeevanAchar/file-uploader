import React from "react";
import folder from "../../assets/folder.svg";
import "./style.scss"

function Sidebar() {
    return (
        <div className="sidebar-block">
            <div className="sidebar-inner-block">
                <img src={folder} alt="" />
                <h2>Project</h2>
            </div>
        </div>
    )
}
export default Sidebar;
