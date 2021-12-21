import "./social.css";
import twitter from "../../img/twitter.png";
import email from "../../img/email.png";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import github from "../../img/github.png";

let social = () => {

  return (

    <div className="socialSection"> 
      <div className="mobileSocialHeader">Social</div>
    <div className="socialLinksSection">
    <img src={twitter} className="socialImage" />
    <img src={email} className="socialImage" />
    <img src={instagram} className="socialImage" />
    <img src={facebook} className="socialImage" />
    <img src={github} className="socialImage" />
    </div>
           <div className="socialHeader">Social</div>
    </div>
  )


}

export default social;
