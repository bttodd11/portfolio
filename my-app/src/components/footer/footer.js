import "./footer.css";
import linkedin from "../../img/linkedin.png";
import email from "../../img/email.png";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import github from "../../img/github.png";

let footer = () => {

  return (
    <div className="footerSection"> 
    <p>Connect</p>
    <a href="https://www.linkedin.com/in/bttodd/"><img src={linkedin} className="footerImage"/></a>
    <a href="bttodd@icloud.com"><img src={email} className="footerImage"/></a>
    <a href="https://www.instagram.com/bttodd11/"><img src={instagram} className="footerImage"/></a>
    <a href="https://www.facebook.com/brian.b.todd/"><img src={facebook} className="footerImage"/></a>
    <a href="https://github.com/bttodd11"><img src={github} className="footerImage"/></a>
    </div>
  )


}

export default footer;
