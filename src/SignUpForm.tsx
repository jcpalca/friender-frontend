import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import MyAlert from "./MyAlert";

function SignUpForm({signUp}) {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    zip: "",
  });
  const [errors, setErrors] = useState([]);

  console.log("SignUpForm", formData, errors);

  const navigate = useNavigate();

  /**Handles the input change. */
  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        return setErrors(["Passwords must match."]);
    }

    try {
      // make axios call
      const copy = { ...formData };
      delete copy["confirmPassword"];
      await signUp(copy);
      navigate("/");
      // reroute to main page
    } catch (err) {
      // set errors
      setErrors(err);
    }
  }

  return (
    <Form className="SignUpForm container" >
      <Form.Text as="h1" className="SignUpForm-title mt-3">Sign Up</Form.Text>
      <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          value={formData.email}
          type="email"
          name="email"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password:</Form.Label>
        <Form.Control
          value={formData.password}
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Confirm Password:</Form.Label>
        <Form.Control
          value={formData.confirmPassword}
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          required
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

export default SignUpForm;
