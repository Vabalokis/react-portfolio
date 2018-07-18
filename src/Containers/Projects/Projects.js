import React from "react";
import Project from "../../Components/Project/Project";
import { Grid, Row, Col } from "react-bootstrap";
import "./Projects.css";

//Image references for webpack
import deRailv1Screenshot from "../../assets/derailv1.png";
import deRailv2Screenshot from "../../assets/derailv2.png";
import cryptocubedScreenshot from "../../assets/cryptocubed.png";
import chooseadventureScreenshot from "../../assets/chooseadventure.png";
import blackjackScreenshot from "../../assets/blackjack.png";
import blackjackduelScreenshot from "../../assets/blackjackduel.png";
import blackjackes6Screenshot from "../../assets/blackjackes6.png";
import vapelabScreenshot from "../../assets/vapelab.png";


const projects = props => {
  return (
    <div className="Projects">
      
      <Grid> 
        <Row>
          <Col md={6}>
          <Project
        name        = "deRail porfolio v1"
        description = "My web developer's portfolio"
        reason      = "Learning angular , displaying my projects"
        tags        = {["Angular", "Typescript", "CSS" , "PHP"]}
        picture_URL = {deRailv1Screenshot}
        demo_URL    = "http://derail.lt/demo/derailv1/"
        git_URL     = "https://github.com/Vabalokis/angularweb"
      />
          </Col>
          <Col md={6}>
          <Project
        name        = "Cryptocubed"
        description = "Cryptocurrency trading advice and signal listing subscribtion service."
        reason      = "Helping a friend with his crypto-currency venture"
        tags        = {["SQL", "PHP", "CSS", "JavaScript"]}
        picture_URL  = {cryptocubedScreenshot}
        demo_URL    = "http://www.derail.lt/demo/cryptocubed/"
        git_URL     = "https://github.com/Vabalokis/cryptocubed"
      />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
          <Project
        name        = "deRail porfolio v2"
        description = "My web developer's portfolio remade in react"
        reason      = "Learning react.js"
        tags        = {["React.js", "Javascript", "Bootstrap" ,"Firebase"]}
        picture_URL  = {deRailv2Screenshot}
        demo_URL    = ""
        git_URL     = ""
      />
          </Col>
          <Col md={6}>
          <Project
        name        = "Blackjack duel"
        description = "Blackjack multiplayer duel game with live chat"
        reason      = "Learning websockets with socket.io library"
        tags        = {["Node.js", "Socket.io"]}
        picture_URL  = {blackjackduelScreenshot}
        demo_URL    = "https://hidden-caverns-22423.herokuapp.com"
        git_URL     = "https://github.com/Vabalokis/blackjack-duel"
      />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
          <Project
        name        = "Choose your adventure"
        description = "Choose your own adventure game"
        reason      = "Learning tree data structures in javascript"
        tags        = {["Javascript", "TreeModel"]}
        picture_URL  = {chooseadventureScreenshot}
        demo_URL    = "http://www.derail.lt/demo/adventure/"
        git_URL     = "https://github.com/Vabalokis/choose-your-adventure"
      />
          </Col>
          <Col md={6}>
          <Project
        name        = "Vapelab"
        description = "Online shop specializing in the selling of electronic cigarette products."
        reason      = "Learning opencart mvc system and themes"
        tags        = {["Opencart custom theme", "PHP", "CSS"]}
        picture_URL  = {vapelabScreenshot}
        demo_URL    = ""
        git_URL     = "https://github.com/Vabalokis/vapelabopencarttheme"
      />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
          <Project
        name        = "Blackjack es6"
        description = "Singleplayer blackjack game remake without jquery"
        reason      = "Trying out new es6 features"
        tags        = {["Javascript es6"]}
        picture_URL  = {blackjackes6Screenshot}
        demo_URL    = "https://github.com/Vabalokis/blackjack"
        git_URL     = "https://github.com/Vabalokis/blackjack-es6"
      />
          </Col>
          <Col md={6}>
          <Project
        name        = "Blackjack"
        description = "Singleplayer blackjack game against the dealer."
        reason      = "Learning jquery"
        tags        = {["Javascript", "Jquery"]}
        picture_URL  = {blackjackScreenshot}
        demo_URL    = "http://www.derail.lt/demo/blackjack/"
        git_URL     = "https://github.com/Vabalokis/blackjack"
      />
          </Col>
        </Row>
     </Grid>
    
    </div>
  );
};

export default projects;
