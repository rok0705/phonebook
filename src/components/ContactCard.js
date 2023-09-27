import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactCard = ({ item }) => {
  return (
    <Row>
      <Col lg={2}>
        <img
          className="contact-image"
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
        ></img>
      </Col>
      <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactCard;
