import React from "react";
import { ProjectContext } from "../../context";
import moreIcon from "../../assets/menu.svg";
import "./style.scss";
import dayjs from "dayjs";

function Cards() {
    const { projects } = React.useContext(ProjectContext);

    return (
        <div className="cards-container">
            <div className="cards-block">
                {
                    projects.map((project, index) => {
                        return (
                            <div key={index} className="cards-inner-block">
                                <img src={project.image} alt={project.title} />
                                <h4>{project.title}</h4>
                                <div className="cards-block-d">
                                    <>{dayjs(project.timestamp).format('DD MMMM')}</>
                                    <img src={moreIcon} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Cards;
