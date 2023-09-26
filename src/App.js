import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./components/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";

// 1. left : form   and  right : contact list and search box
// 2. using form, contact list can be updated
// 3. display contact list size
// 4. a user can filter contact list by username

function App() {
  return (
    <div>
      <h1 className="title">Phone Book</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm></ContactForm>
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
