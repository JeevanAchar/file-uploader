import React, { useContext, useState } from "react";
import "./style.scss";
import { ProjectContext } from "../../context";

function NewProject() {
    const context = useContext(ProjectContext);
    const [projectName, setProjectName] = useState("");
    const [fileName, setFileName] = useState("");
    const [imageData, setImageData] = useState("");
    

    const fileSelect = () => {
        document.getElementById("file-upload").click();
    }

    const handleFile = ({ target: { files } }) => {
        const [image] = files;
        const file = new FileReader();
        file.readAsDataURL(image);
        file.onload = (content) => {
            setFileName(image.name);
            setImageData(content.target.result);
            context.setPreview(content.target.result);
        }
    }

    const handleSubmit = () => {
        if (projectName.trim() === "" || fileName.trim() === "" || imageData.trim() === "") {
            return;
        }

        const projects = [
            {
                title: projectName,
                image: imageData,
                timestamp: new Date(),
            },
            ...context.projects
        ];
        context.setProject(projects);
        localStorage.setItem('projects', JSON.stringify(projects));
        setFileName("");
        setProjectName("");
        setImageData("");
        context.setPreview(null);
    }
 
    return (
        <div className="new-project-block">
            <h4>Start a new Project</h4>
            <p>Select and browse your product image and start experimenting</p>

            <div className="form-group project-step-1">
                <label htmlFor="project-name">Step 1</label>
                <input type="text" className="form-control" placeholder="Your Project name" name="project-name" id="project-name" value={projectName} onChange={(e) => { setProjectName(e.target.value) }} />
            </div>

            <div className="form-group project-step-1">
                <label htmlFor="file-uploader">Step 2</label>
                <input type="text" className="form-control file-uploader" placeholder={fileName || "Upload your Product image"} name="file-uploader" id="file-uploader" readonly />
                <div className="dropzone" role="button" onClick={fileSelect} />
                <input type="file" name="file-upload" accept="image/png, image/jpg, image/jpeg" id="file-upload" onChange={handleFile} />
            </div>

            <button className="btn btn-primary" onClick={handleSubmit} >Create new project</button>
        </div>
    )
}
export default NewProject;
