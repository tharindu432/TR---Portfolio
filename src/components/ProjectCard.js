import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, icon1, icon2 }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {/* <div className="proj-icons">
            <img src={icon1} className="card-icon " alt="Icon 1" />
            <img src={icon2} className="card-icon" alt="Icon 2" />
          </div> */}
        </div>
      </div>
    </Col>
  )
}