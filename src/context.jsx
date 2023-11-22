import React from "react";

const ProjectContext = React.createContext({
    projects: [],
    activePreview: null,
    setPreview: () => null,
    setProject: () => null,
});

function ContextWrapper({ children }) {
    const [projects, setProjects] = React.useState(JSON.parse(localStorage.getItem("projects") || "[]"));
    const [activePreview, setActivePreview] = React.useState(null);

    const props = {
        projects,
        activePreview,
        setPreview: setActivePreview,
        setProject: setProjects
    }

    return (
        <ProjectContext.Provider value={props}>
            {children}
        </ProjectContext.Provider>
    )
}

export {
    ProjectContext,
    ContextWrapper,
};
