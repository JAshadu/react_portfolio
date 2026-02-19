import './Project.css'

function Project(props) {
    return(
        <div className="project-preview">
            <img src={`${props.img}`} alt={`Preview of ${props.title} project`}></img>
        </div>
    )
}

export default Project;
