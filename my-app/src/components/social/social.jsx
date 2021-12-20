import "./social.css";
import twitter from "../../img/twitter.png";

let social = () => {

  return (

    <div className="socialSection"> 
    <img src={twitter} className="socialImage" />
    <img src={twitter} className="socialImage" />
    <img src={twitter} className="socialImage" />
    <img src={twitter} className="socialImage" />
           <div className="socialHeader">Social</div>
    </div>
  )


}

export default social;
