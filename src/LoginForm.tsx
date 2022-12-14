import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import MyAlert from "./MyAlert";
import "./LoginForm.css";

/**
 * LoginForm:
 *
 * Props: login - function, to be called in parent
 *
 * State: formData - like {
    email: "",
    password: "",
  }
          errors - array of Errors
 *
 * App -> Routes -> SignUpForm
 */

function LoginForm({ login }) {
  console.log("LoginForm");

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  /**Handles the input change. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  /**Handle form submission. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      // make axios call
      await login(formData);
      navigate("/");
      // reroute to main page
    } catch (err) {
      // set errors
      setErrors(err);
    }
  }

  return (
    <Form className="LoginForm container" onSubmit={handleSubmit}>
      <Form.Text as="h1" className="LoginForm-title mt-3">Login</Form.Text>
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
      {errors.length > 0 && <MyAlert messages={errors} />}
      <Button as="button" className="btn btn-primary">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
