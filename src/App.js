import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./components/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactList from "./components/ContactList";

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
          <Col lg={6}>
            <ContactForm></ContactForm>
          </Col>
          <Col lg={6}>
            <ContactList></ContactList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
