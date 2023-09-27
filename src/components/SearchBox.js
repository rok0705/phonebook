import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  let { contactList } = useSelector((state) => state);

  const searchByName = (event) => {
    event.preventDefault();
    console.log("keyword:", keyword);

    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };

  return (
    <Form onSubmit={searchByName}>
      <Row>
        <Form.Label>Search</Form.Label>
        <Col lg={7}>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
