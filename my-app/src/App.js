import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";
import Experience from "./components/experience/experience";
import Quote from "./components/quote/quote";
import Footer from "./components/footer/footer";
import PreLoader from "./components/preloader/preloader";
import "./App.css";
import $ from 'jquery';



const App = () => {

  // Function to remove the Preloader
  const removePreLoader = () => {
    $('.preLoader').hide();
    $('.appContainer').show();

  }

  // When the page loads hide the appContainer until it fully loads
  // $(function(){
  //   $('.appContainer').hide();
  //   $(window).on('load', function(){
  //      setTimeout(removePreLoader, 1000)
  //   })
  // })

  
  return (
    <body>
      {/* <div className="preLoader">
        <PreLoader />
      </div> */}
      <div className="appContainer">
        <Nav />
        <Hero />
        <Experience />
        <Quote />
        <Footer />
      </div>
    </body>
  );
}

export default App;
