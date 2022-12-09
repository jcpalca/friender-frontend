import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import MyAlert from "./MyAlert";

function HobbyForm({prev, next, values}) {
  console.log("HobbyForm");

  const [formData, setFormData] = useState(values);

  function handleChange(i, e) {
    let newFormData = [...formData];
    newFormData[i][e.target.name] = e.target.value;
    setFormData(newFormData);
  }

  //TODO: generate new input forms and delte input forms from buttons
  // https://bapunawarsaddam.medium.com/add-and-remove-form-fields-dynamically-using-react-and-react-hooks-3b033c3c0bf5
        return (
          <Form className="HobbyForm container" >
            <Form.Text as="h1" className="HobbyForm-title mt-3">Sign Up</Form.Text>
            {formData.map((h, idx) => (
              <Form.Group key={idx}>
                <Form.Label>Hobby: </Form.Label>
                <Form.Control
                  value={h.hobby}
                  type="text"
                  name="hobby"
                  onChange={e => handleChange(e, idx)}
                  required
                />
              </Form.Group>
            ))}


          </Form>
        );
      }


export default HobbyForm;
