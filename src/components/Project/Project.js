import './Project.css'
import { useRef } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';


function Project(props) {
    const containerRef = useRef()

    const openCard = () => {
        containerRef.current.style.display = 'flex'
    }

    return(
        <div className="project-preview">
            <a onClick={openCard}><img src={`${props.img}`} alt={`Preview of ${props.title} project`}></img></a>
            <ProjectCard
            title={props.title}
            img={props.img}
            links={props.links}
            description={props.description}
            skills={props.skills}
            containerRef={containerRef} />
        </div>
    )
}

export default Project;
