import React, {useContext, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import MyAlert from "./MyAlert";
import userInfoContext from './userInfoContext';

function HobbyForm() {
  const currUser = useContext(userInfoContext);

  const [formData, setFormData] = useState([...currUser.hobbies]);

  console.log("HobbyForm", formData, currUser);

  function handleChange(e, i) {
    let newFormData = [...formData];
    newFormData[i] = e.target.value;
    setFormData(newFormData);
  }

  function addHobby(e) {
    e.preventDefault();
    setFormData(formData => ([...formData, ""]));
  }

  function removeHobby(e, idx) {
    e.preventDefault();
    let newFormData = [...formData];
    newFormData.splice(idx, 1);
    setFormData(newFormData);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    //
  }

  //TODO: generate new input forms and delte input forms from buttons
  // https://bapunawarsaddam.medium.com/add-and-remove-form-fields-dynamically-using-react-and-react-hooks-3b033c3c0bf5
        return (
          <Form className="HobbyForm container" >
            <Form.Text as="h1" className="HobbyForm-title mt-3">Edit Hobbies</Form.Text>
            {formData.map((h, idx) => (
              <Form.Group key={idx}>
                <Form.Label>Hobby {idx + 1}: </Form.Label>
                <Form.Control
                  value={h || ""}
                  type="text"
                  onChange={e => handleChange(e, idx)}
                  required
                />
                <button onClick={e => removeHobby(e, idx)}>Remove</button>
              </Form.Group>
            ))}
            <button onClick={e => addHobby(e)}>Add</button>
          </Form>
        );
      }


export default HobbyForm;
