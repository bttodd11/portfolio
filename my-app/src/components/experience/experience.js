import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import "./experience.css";

let experience = () => {
  return (
    <div id="experience" className="expSection">
    <Container fluid="true" className="gx-0 expDetials">
      <Row>
        <Col className="tabHeader" xs={12} s={12} md={2}>
          <div className="expHeader">Experience</div>
        </Col>
        <Col className="expHistory" xs={12} s={12} md={3}>
          <Card
            style={{ width: "18rem", height: "100%" }}
            className="mb-2 siemensCard"
          >
            <Card.Header>Software Developer</Card.Header>
            <Card.Body>
              <Card.Title>Siemens</Card.Title>
              <Card.Text className="jobDescriptionText">
                At Siemens I worked on feature requests and updates on the web configuration tool. This tool is used
                 to configure our client's HVAC/Lighting setpoints and schedules. This tool was built in AngularJS.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="expHistory" xs={12} s={12} md={3}>
          <Card
            style={{ width: "18rem",  height: "100%" }}
            className="mb-2 homeDepotCard"
          >
            <Card.Header>Software Developer</Card.Header>
            <Card.Body>
              <Card.Title>The Home Depot </Card.Title>
              <Card.Text className="jobDescriptionText">
                Currently I am on the Dynamic Content team at The Home Depot.
                On this team I am working on the front-end, back-end and intergrating with the CMS we are using.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="expHistory" xs={12} s={12} md={3}>
          <Card
            style={{ width: "18rem",  height: "100%" }}
            className="mb-2 freeLanceCard"
          >
            <Card.Header>Developer</Card.Header>
            <Card.Body>
              <Card.Title>Freelance Work </Card.Title>
              <Card.Text className="jobDescriptionText">
              I am open to doing freelance work currently,  I am trying to expand my developer knowledge so any challenge that you can think of will benefit me. 
              If you need work done or if you want to collab on a project please connect with me. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default experience;
