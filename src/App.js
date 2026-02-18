import './App.css';
import cvImg from './resources/cv screenshot.jpg'
import Card from './components/Card/Card';
import Project from './components/Project/Project';
import projectInfo from './resources/projectInfo';
import cardInfo from './resources/cardInfo';
import TechSkill from './components/TechSkill/TechSkill';
import techSkills from './resources/techSkills';

function App() {
  return (
    <div className="App">
      <header>
        <a id='home' href='#'>{/*Consider having a logo, <img src='https://placehold.co/50'></img>*/}JAshadu</a>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#cv'>CV</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>
      <main>
        <div className='main-section' id='intro'>
          <div className='name'>
            <h1>Joseph Ashadu</h1>
            <div>
              <h3>Full Stack Developer</h3>
              <h4>London, United Kingdom</h4>
            </div>
          </div>
          <div className='tech-skills'>
            {techSkills.map(skill => <TechSkill
            key={skill.id}
            {...skill} />)}
          </div>
        </div>
        <div className='main-section' id='about'>
          <div className='about-text'>
            <h2>About</h2>
            {/* Consider changing these paragraphs */}
            <p>I started learning how to code in June 2024. At first, I thought that this would just become another hobby of mine, but soon after, I found myself wanting to change my entire career. With a love for problem-solving and a genuine interest in technology, I'm confident that pursuing software engineering was the right decision.</p>
            <p>I'm currently building my skills in both Front-End and Back-End Development and I'm excited to continue growing as a developer.</p>
          </div>
          <div id='fact-cards'>
            {cardInfo.map(card => <Card 
            key={card.id}
            {...card} />)}
          </div>
        </div>
        <div className='main-section' id='projects'>
          <h2>Projects</h2>
          <div className='my-work'>
            {projectInfo.map(project => <Project 
            key={project.id}
            {...project} />)}
          </div>
        </div>
        <div className='main-section' id='cv'>
          <h2>My CV</h2>
          <div id='cv-preview'>
            <img src={cvImg}></img>
            <div className='view-cv'>
              <a>View CV</a>
            </div>
          </div>
        </div>
        <div className='main-section' id='contact'>
          <h2>Contact</h2>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
