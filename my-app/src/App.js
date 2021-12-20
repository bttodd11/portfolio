import Nav from './components/nav';
import Hero from './components/hero';
import Experience from './components/experience';
import Social from './components/social';
import './App.css';

function App() {
  return (
    <div className="appContainer">
      <Nav />
      <Hero />
      <Experience />
      <Social />
    </div>
  );
}

export default App;
