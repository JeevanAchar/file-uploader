import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import Preview from "./components/Preview";
import { ContextWrapper } from "./context";

function Root() {
    return (
        <ContextWrapper>
            <Navbar />
            <div className="main-content">
                <Sidebar />
                <NewProject />
                <Preview />
            </div>
        </ContextWrapper>
    )
}
export default Root;
