import './ProjectCard.css';

function ProjectCard() {
    return(
        <div className='project-card-border'>
            <div className='project-card'>
                <h3>Example</h3>
                <span>X</span>
                <div className='project-card-middle'>
                    <div className='project-links'>
                        <a className='project-link'>Open Project</a>
                        <a className='project-github'>GitHub Repository</a>
                    </div>
                    <img src='https://placehold.co/300x200'></img>
                    <div className='project-skills'>Import Tech Stack Component</div>
                </div>
                <p>An example description</p>
            </div>
        </div>
    )
}

export default ProjectCard;
