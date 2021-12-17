import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import heroImage from "../../img/hero.jpg";
import "./hero.css";

let hero = () => {
  return (
    <div className="hero">
    <Container fluid="true" className="gx-0 containerClass">
      <Row className="gx-0 rowContainer">
        <Col xs={12} s={6} md={4} className="heroSection">
          <div className="imageSection">
          <p className="imageName">Brian Todd</p>
          </div>
        </Col>
        <Col xs={12} s={6} md={4} className="heroSection2">
          <div className="statHeader">
            <div className="circleHeader">
              <span className="numberHeader">11</span>
            </div>
            <div className="infoHeader">
              <div className="nameHeader">
                <span>Brian Todd</span>
              </div>
              <div className="stats">
                <span>South Austin, Texas</span>
                <span>Height: 6'4</span>
                <span>DOB: 10-21-1991</span>
              </div>
            </div>
          </div>
          <div>
            <h5 className="tableHeader">Experience Stats</h5>
            <p className="scalingNote">
              All percentages are based on a max value of 1.000 scale.
            </p>
            <table className="cardTable">
              <tr>
                <th style={{borderLeft: "none"}}></th>
                <th>Exp</th>
                <th>Understanding</th>
                <th>Confidence</th>
                <th style={{borderRight: "none"}}>Overall</th>
              </tr>
              <tr>
                <td style={{fontWeight: "bolder", borderLeft: "none"}}>React</td>
                <td>.800%</td>
                <td>.600%</td>
                <td>.655%</td>
                <td style={{borderRight: "none"}}>.700%</td>
              </tr>
              <tr>
              <td style={{fontWeight: "bolder", borderLeft: "none"}}>AngularJS</td>
                <td>.950%</td>
                <td>.825%</td>
                <td>.975%</td>
                <td style={{borderRight: "none"}}>.985%</td>
              </tr>
              <tr>
              <td style={{fontWeight: "bolder", borderLeft:"none"}}>JavaScript</td>
                <td>.920%</td>
                <td>.750%</td>
                <td>.900%</td>
                <td style={{borderRight: "none"}}>.850%</td>
              </tr>
              <tr>
              <td style={{fontWeight: "bolder", borderLeft: "none"}}>Java</td>
                <td>.200%</td>
                <td>.350%</td>
                <td>.325%</td>
                <td style={{borderRight: "none"}}>.380%</td>
              </tr>
              <tr>
              <td style={{fontWeight: "bolder", borderLeft: "none"}}>GraphQL</td>
                <td>.460%</td>
                <td>.200%</td>
                <td>.180%</td>
                <td style={{borderRight: "none"}}>.195%</td>
              </tr>
              <tr className="devText">
                <td style={{borderLeft: "none"}}></td>
                <td>A</td>
                <td>DAMN</td>
                <td>GOOD</td>
                <td style={{borderRight: "none"}}>DEVELOPER</td>
              </tr>
            </table>
          </div>
          <div className="descriptionSection">
            <p className="description">
              A passionate and experienced developer that loves every aspect of
              web development. Fast and eager learner and a reliable team member
              that will stand behind his work. I am very skilled with HTML,
              Sass, CSS, jQuery, Bootstrap and JavaScript. I have over five
              years of experience with each of these technologies, and I’m eager
              to learn even more languages and frameworks to sharpen my skills.
              In addition to web technologies, I’m skilled in frameworks such as
              AngularJS and ReactJS.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default hero;
