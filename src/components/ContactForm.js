import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const dispatch = useDispatch();

  const addContact = (event) => {
    console.log("addContact: ", name, phoneNumber);
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name: name, phoneNumber: phoneNumber },
    });
    setName("");
    setPhoneNumber("");
  };

  return (
    <Form onSubmit={(event) => addContact(event)}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicContact">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter phone number"
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default ContactForm;
