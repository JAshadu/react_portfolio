import { useRef } from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
    const closeRef = useRef()

    const closePortfolioCard = (e) => {
        if(props.links.project === '/#') {
            props.closeCard()
        }
    }

    return(
        <div className='project-card-container'>
            <div className='project-card'>
                <h3>{props.title}</h3>
                <span ref={closeRef} onClick={props.closeCard}>X</span>
                <div className='project-card-middle'>
                    <div className='project-links'>
                        {props.links.project && (<a className='project-link' href={props.links.project} onClick={closePortfolioCard}>Open Project</a>)}
                        {props.links.github && (<a className='project-github' href={props.links.github} target='_blank' rel='noopener noreferrer'>GitHub Repository</a>)}
                    </div>
                    <img src={props.img} alt={`Preview of ${props.title} project`}></img>
                    <div className='project-skills'>Import Tech Stack Component</div>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;
