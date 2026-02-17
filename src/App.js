import './App.css';
import cvImg from './resources/cv screenshot.jpg'
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <header>
        <a id='home'>{/*Consider having a logo, <img src='https://placehold.co/50'></img>*/}JAshadu</a>
        <nav>
          <a>About</a>
          <a>Projects</a>
          <a>CV</a>
          <a>Contact</a>
        </nav>
      </header>
      <main>
        <div className='main-section' id='intro'>
          <div>
            <h1>Joseph Ashadu</h1>
            <div className='position'>
              <h3>Full Stack Engineer</h3>
              <h4>London, United Kingdom</h4>
            </div>
          </div>
        </div>
        <div className='main-section' id='about'>
          <div className='about-text'>
            <h2>About</h2>
            <p></p>
            <p></p>
          </div>
          <div id='fact-cards'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
        <div className='main-section' id='projects'>
          <h2>Projects</h2>
          <div className='my-work'></div>
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
        <div className='main-section' id='contact'></div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
