import "./quote.css";
import twitter from "../../img/twitter.png";
import email from "../../img/email.png";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import github from "../../img/github.png";

let quote = () => {

  return (

    <div className="quoteSection"> 
      <div className="mobilequoteHeader">quote</div>
    <div className="quoteLinksSection">
    <img src={twitter} className="quoteImage" />
    <img src={email} className="quoteImage" />
    <img src={instagram} className="quoteImage" />
    <img src={facebook} className="quoteImage" />
    <img src={github} className="quoteImage" />
    </div>
           <div className="quoteHeader">quote</div>
    </div>
  )


}

export default quote;
