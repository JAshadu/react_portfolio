import './Project.css'

function Project(props) {
    return(
        <div className="project-preview">
            <img src={`${props.img}`} alt={props.title}></img>
        </div>
    )
}

export default Project;
