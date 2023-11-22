import React from "react";
import "./style.scss"
import Cards from "../Cards/cards";
import { ProjectContext } from "../../context";

function Preview() {
    const {activePreview} = React.useContext(ProjectContext);
    const background = !activePreview ? { background: 'grey' } : { backgroundImage: `url(${activePreview})` };
    console.log(background);

    return (
        <div className="preview">
            <div>
                <h4>Your recent projects</h4>
                <p>Select and browse your project image and start experimenting</p>
            </div>
            <div className="blank" style={{ ...background }} />
            <Cards/>
        </div>
    )
}
export default Preview;
