import './App.css';
import { useState } from 'react';
import TechSkill from './components/TechSkill/TechSkill';
import Card from './components/Card/Card';
import Project from './components/Project/Project';
import { ContactUs } from './resources/ContactUs';
import techSkills from './resources/techSkills';
import projectInfo from './resources/projectInfo';
import cardInfo from './resources/cardInfo';
import cvImg from './resources/cv screenshot.jpg';
import cvLink from './resources/Joseph Ashadu (CV).pdf';
import emailBanner from './resources/white email banner.svg';
import linkedinImg from './resources/linkedin logo copy.png';
import githubImg from './resources/github trnsp copy.png';
import instaImg from './resources/insta logo copy.png';

function App() {
  const [header, setHeader] = useState(false)

  const changeHeaderBackground = () => {
    if(window.scrollY >= 420){
        setHeader(true);
    }
    else{
        setHeader(false);
    }
  }

  window.addEventListener('scroll', changeHeaderBackground)

  return (
    <div className="App">
      <header className={header ? 'header active' : 'header'}>
        <a id='home' href='/#'><span>J</span><span>A</span><span>s</span><span>h</span><span>a</span><span>d</span><span>u</span></a>
        <nav>
          <a href='/#about'>About</a>
          <a href='/#projects'>Projects</a>
          <a href='/#cv'>CV</a>
          <a href='/#contact'>Contact</a>
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
            <div className='journey'>
              <h2>About</h2>
              {/* Consider changing these paragraphs */}
              <p>I started learning how to code in June 2024. At first, I thought that this would just become another hobby of mine, but soon after, I found myself wanting to change my entire career. With a love for problem-solving and a genuine interest in technology, I'm confident that pursuing software engineering was the right decision.</p>
              <p>I'm currently building my skills in both Front-End and Back-End Development and I'm excited to continue growing as a developer.</p>
            </div>
            <div className='about-course'>
              <div className='codecademy'>
                <h3>Current Course: <a href='https://www.codecademy.com/learn/paths/full-stack-engineer-career-path' target='_blank' rel='noopener noreferrer'>Full-Stack Engineer Codecademy</a></h3>
                <div className='progress'>
                  <h4>Progress: <span>52% Complete</span></h4>
                  <div className='progress-bar'>
                    <div id='current-progress'></div>
                  </div>
                  <em>*Last updated: 20th February 2026</em>
                </div>
              </div>
            </div>
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
          <div className='cv-text'>
            <h2>My CV</h2>
            <a href={cvLink}>View CV</a>
          </div>
          <div className='cv-preview'>
            <img src={cvImg} alt='Preview of CV'></img>
          </div>
        </div>
        <div className='main-section' id='contact'>
          <div className='contact-text'>
            <h2>Contact</h2>
            <p>Want to get in touch? Send me an email or follow any of my socials below!</p>
          </div>
          <div className='form'>
            <ContactUs/>
          </div>
        </div>
      </main>
      <footer>
        <div className='my-email'>
          <img src={emailBanner} alt='Email Icon'></img>
          <h4>jashadu123@gmail.com</h4>
        </div>
        <div>
          <a href='/#' id='back-to-top'>Back To Top</a>
        </div>
        <div className='my-socials'>
          <a href='https://www.linkedin.com/in/joseph-a-9360763a1'><img src={linkedinImg} alt='Link to LinkedIn Profile'></img></a>
          <a href='https://github.com/JAshadu'><img src={githubImg} id='github-logo' alt='Link to GitHub Profile'></img></a>
          <a href='https://www.instagram.com/jb.ash_'><img src={instaImg} alt='Link to Instagram Profile'></img></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
