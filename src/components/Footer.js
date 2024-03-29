import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container >
        <Row className="align-items-center">
        
          <Col size={10} sm={6}>
            <br></br>
            <img src={logo} alt="Logo" /> 
           
            <b>T</b>harindu <b>R</b>uwanpathirana
          </Col>
         
          <Col size={12} sm={6} className="text-center text-sm-end">
            <br></br>
          

            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>

            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
         
        </Row>
       
      </Container>
    </footer>
  )
}
