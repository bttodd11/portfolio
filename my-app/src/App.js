import Nav from './components/nav';
import Hero from './components/hero';
import Experience from './components/experience';
import Quote from './components/quote';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="appContainer">
      <Nav />
      <Hero />
      <Experience />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
