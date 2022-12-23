import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import MyAlert from "./MyAlert";
import userInfoContext from './userInfoContext';

function InterestForm({updateInterests}) {
  const currUser = useContext(userInfoContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState([...currUser.interests]);

  console.log("InterestForm", formData, currUser);

  function handleChange(e, i) {
    let newFormData = [...formData];
    newFormData[i] = e.target.value;
    setFormData(newFormData);
  }

  function addInterest(e) {
    e.preventDefault();
    setFormData(formData => ([...formData, ""]));
  }

  function removeInterest(e, idx) {
    e.preventDefault();
    let newFormData = [...formData];
    newFormData.splice(idx, 1);
    setFormData(newFormData);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    updateInterests(formData);
    navigate('/profile')
  }

  //TODO: generate new input forms and delte input forms from buttons
  // https://bapunawarsaddam.medium.com/add-and-remove-form-fields-dynamically-using-react-and-react-hooks-3b033c3c0bf5
        return (
          <Form className="InterestForm container" >
            <Form.Text as="h1" className="InterestForm-title mt-3">Edit Interests</Form.Text>
            {formData.map((i, idx) => (
              <Form.Group key={idx}>
                <Form.Label>Interest {idx + 1}: </Form.Label>
                <Form.Control
                  value={i || ""}
                  type="text"
                  onChange={e => handleChange(e, idx)}
                  required
                />
                <button onClick={e => removeInterest(e, idx)}>Remove</button>
              </Form.Group>
            ))}
            <button onClick={e => addInterest(e)}>Add</button>
            <button onClick={handleSubmit}>Update</button>
          </Form>
        );
      }


export default InterestForm;
