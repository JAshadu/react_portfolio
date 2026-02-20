import './Project.css'

function Project(props) {
    return(
        <div className="project-preview">
            <a href={props.link}><img src={`${props.img}`} alt={`Preview of ${props.title} project`}></img></a>
        </div>
    )
}

export default Project;
