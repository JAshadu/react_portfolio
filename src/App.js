import './App.css';

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
          <h1>Joseph Ashadu</h1>
          <h3>Full Stack Engineer</h3>
          <h4>London, United Kingdom</h4>
        </div>
        <div className='main-section' id='about'>
          <div className='about-text'>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id='flash-cards'></div>
        </div>
        <div className='main-section' id='projects'>
          <h2>Projects</h2>
          <div className='my-work'></div>
        </div>
        <div className='main-section' id='cv'>
          <h2>CV</h2>
          <div id='cv-preview'>
            <button>View CV</button>
          </div>
        </div>
        <div className='main-section' id='contact'></div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
