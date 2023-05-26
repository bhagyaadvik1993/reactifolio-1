import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
    <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              <strong className="body-title-style ">Giesecke+ Devrient</strong>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Programmer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Application Developer</strong>
                    <br />
                    <strong>Technology:</strong>  React.js, Express.js, Node.js, MongoDB, MySQL, TypeScript
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed </strong> applictaion using <strong> MERN Stack </strong> </li>
                      <li><strong>Specialize</strong> in building interactive and dynamic user interfaces using React. I am skilled in creating reusable components, managing state, and handling user interactions.
                      </li>
                      <li><strong>On the back-end</strong> , I have a strong command of Node.js, which allows me to develop server-side logic, handle HTTP requests, and build RESTful APIs 
                      </li>
                      <li><strong>Tested</strong> application with Jest and React testing library.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              <strong className="body-title-style ">INFINITY IT SOLUTIONS</strong>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Associate Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Java Developer</strong>
                    <br />
                    <strong>Technology:</strong> Java, Java Script, MS-SQL, Node.js
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      <li><strong>Developed</strong> automation system to create SQL bulk query scripts that 
                        increased efficiency by 80% and decreased working hours from 4 hours to 30 mins per task.
                      </li>
                      <li><strong>Provided</strong> application maintenance while working as `Production Support`. 
                      </li>
                      <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                      to the business requirements.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
              <strong className="body-title-style ">BusyQA</strong>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">DevOps and Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Java Developer</strong>
                    <br />
                    <strong>Technology:</strong> Docker, Jenkins, Ansible, Git, Kubernetes, Terraform, GCP, React.js, Express.js, Node.js, MongoDB
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed </strong> applictaion using <strong> MERN Stack </strong> </li>
                      <li><strong>Efficiently</strong> managed elements of the web page using virtual DOM with the help of Context API, Redux and MobX
                      </li>
                      <li><strong>Provided</strong> application deployment and Integration Support using Jenkins, Docker, Kubernetes. 
                      </li>
                      <li><strong>Tested</strong> application with Jest and React testing library.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
