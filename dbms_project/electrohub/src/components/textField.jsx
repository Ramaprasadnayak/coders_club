import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";

function TextField() {
  return (
    <Form className="searchoption">
      <Form.Group className="mb-3" controlId="searchInput">
        <InputGroup>
          <Form.Control type="text" placeholder="Search..." />
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

export default TextField;
