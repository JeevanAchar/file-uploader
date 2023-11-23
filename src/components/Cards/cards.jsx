import React, { useContext, useEffect, useState } from "react";
import { collection, orderBy, onSnapshot , query } from "firebase/firestore";
import { db } from "../../firebase-config";
import moreIcon from "../../assets/menu.svg";
import dayjs from "dayjs";
import "./style.scss";
import { ProjectContext } from "../../context";

function Cards() {
    const [data, setData] = useState([]);
    const { setPreview } = useContext(ProjectContext);

    useEffect(() => {
        const unsubscibe = onSnapshot(
            query(
                collection(db, "files"),
                orderBy("timestamp", "desc")
            ),
        (snapshot) => {
            const documents = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            return setData(documents)
        });

        return () => unsubscibe();
    }, []);

    return (
        <div className="cards-container">
            <div className="cards-block">
                {
                    data.map((project, index) => {
                        return (
                            <div key={index} className="cards-inner-block" onClick={() => setPreview(project.image)}>
                                <img src={project.image} alt="" />
                                <h4>{project.title}</h4>
                                <div className="cards-block-d">
                                    <>{dayjs(new Date(project.timestamp.seconds*1000)).format("DD MMMM")}</>
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

