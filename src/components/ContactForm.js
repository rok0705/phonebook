import React from "react";
import { Button, Form } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicContact">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="Enter phone number" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default ContactForm;
