import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
//import headerImg from "../assets/img/header-img.svg";
import headerImg from "../assets/img/header1.png";
import tharindu from '../assets/img/tharindu.png';
import motion from 'framer-motion'; 


import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cv from "../assets/img/cv.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "IT Undergraduate", "Full Stack Developer", "Tech Enthusiast"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
 


  return (
    <section className="banner" id="home" >
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">Welcome to my Portfolio</span> */}
                <h1>{`Hi! I'm Tharindu Ruwanpathirana`} <br></br><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "IT Undergraduate", "Full Stack Developer", "Tech Enthusiast" ]'><span className="wrap">{text}</span></span>          
</h1>
                  <p>I am an IT Undergraduate student at university of Moratuwa. As a curious and creative
individual, I am constantly seeking out new opportunities to learn, grow, and make an
impact. With a passion for problem-solving and a love for technology, I am eager to
explore the world of Software Engineering and put my skills to the test.</p>


<button style={{ display: 'inline-block', marginRight: '20px',marginTop:'5px' }}   onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
      
      <a style={{ display: 'inline-block', marginRight: '30px' }}  href={cv} download >Download my CV</a>

                 
    
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""} >
                  <img src={headerImg} alt="Header Img"  />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
