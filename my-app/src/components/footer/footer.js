import "./footer.css";
import twitter from "../../img/twitter.png";
import email from "../../img/email.png";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import github from "../../img/github.png";

let footer = () => {

  return (
    <div className="footerSection"> 
    <p>Connect</p>
    <img src={twitter} className="footerImage" />
    <img src={email} className="footerImage" />
    <img src={instagram} className="footerImage" />
    <img src={facebook} className="footerImage" />
    <img src={github} className="footerImage" />
    </div>
  )


}

export default footer;
