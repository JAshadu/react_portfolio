import './Project.css'
import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';


function Project(props) {
    const [portfolioState, setPortfolioState] = useState(false)

    const openCard = () => {
        setPortfolioState(true)
    }

    const closeCard = () => {
        setPortfolioState(false)
    }

    return(
        <div className="project-preview">
            <button onClick={openCard}><img src={`${props.img}`} alt={`Preview of ${props.title} project`}></img></button>
            {portfolioState && (<ProjectCard
            title={props.title}
            img={props.img}
            links={props.links}
            description={props.description}
            skills={props.skills}
            closeCard={closeCard} />)}
        </div>
    )
}

export default Project;
