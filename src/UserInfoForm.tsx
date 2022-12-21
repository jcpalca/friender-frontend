import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import MyAlert from "./MyAlert";
import userInfoContext from './userInfoContext';
import { useNavigate } from "react-router-dom";


function UserInfoForm({updateUserInfo}) {
    const navigate = useNavigate();
    const currUser = useContext(userInfoContext);
    const [formData, setFormData] = useState({
        email: currUser.email,
        firstName: currUser.firstName,
        lastName: currUser.lastName,
        zip: currUser.zip
    });
    const [errors, setErrors] = useState([]);

    console.log("UserInfoForm", formData, errors);

    function handleChange(evt) {
        const { name, value } = evt.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const copy = {...formData};
        delete copy["email"];
        try {
          await updateUserInfo(copy);
          navigate('/profile');
        } catch(err) {
          setErrors([err]);
        }
    }

    return (
        <Form className="SignUpForm container" >
          <Form.Text as="h1" className="SignUpForm-title mt-3">Edit User</Form.Text>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              value={formData.email}
              type="email"
              name="email"
              disabled
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              value={formData.firstName}
              name="firstName"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              value={formData.lastName}
              name="lastName"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Zipcode:</Form.Label>
            <Form.Control
              value={formData.zip}
              name="zip"
              onChange={handleChange}
              required
            />
          </Form.Group>
          {errors.length > 0 && <MyAlert messages={errors} />}
          <Button as="button" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      );
}

export default UserInfoForm;
