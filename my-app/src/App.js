import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";
import Experience from "./components/experience/experience";
import Quote from "./components/quote/quote";
import Footer from "./components/footer/footer";
import PreLoader from "./components/preloader/preloader";
import "./App.css";

const App = () => {

  // When the page loads hide the appContainer until it fully loads
  window.addEventListener('load', function () {
    setTimeout( document.getElementsByClassName("preLoader")[0].style.visibility = "hidden")
      setTimeout(function(){
        document.getElementsByClassName("appContainer")[0].style.visibility = "visible";
      })
    })
    





  return (
    <body>
      <div className="preLoader">
        <PreLoader />
      </div>
      <div className="appContainer">
        <Nav />
        <Hero />
        <Experience />
        <Quote />
        <Footer />
      </div>
    </body>
  );
};

export default App;
