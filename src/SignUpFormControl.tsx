import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Form";
import MyAlert from "./MyAlert";
import SignUpForm from "./SignUpForm";
import HobbyForm from "./HobbyForm";
import InterestForm from "./InterestForm";
import "./SignUpFormControl.css";

/**
 * SignUpForm:
 *
 * Props: signUp - function, to be called in parent
 *
 * State: formData - like {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
  }
          errors - array of Errors
 *
 * App -> Routes -> SignUpForm
 */

function SignUpFormControl({ signUp }) {
  console.log("SignUpForm");

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    step: 1,
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    zip: "",
    hobbies: [{hobby: ''}],
    interests: [],
  });

  // sign up - {email, firstName, lastName, password, confirmPassword, zip}
  // hobbies - {hobbies}
  // interests - {interests}
  const [errors, setErrors] = useState([]);

  console.log('SignUpFormControl Form Data: ', formData);

  const { step, email, firstName, lastName, password, confirmPassword, zip, hobbies, interests } = formData;
  const stepValue = step;
  const signUpValues = { email, firstName, lastName, password, confirmPassword, zip };
  const hobbiesValues = { hobbies };
  const interestsValues = { interests };
  /** Go back to previous step */
  function prevStep() {
    setFormData(fData => ({...fData, step: stepValue - 1}));
  }

  /** Go to next step */
  function nextStep() {
    setFormData(fData => ({...fData, step: stepValue + 1}));
  }

  /** Handles previous button */
  function handlePrevious(formData) {
    prevStep();
    setFormData(fData => ({...fData, ...formData}))
  }

  function handleNext(formData) {
    nextStep();
    setFormData(fData => ({...fData, ...formData}));
  }

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

    if (formData.password !== formData.confirmPassword) {
      return setErrors(["Passwords must match."]);
    }

    navigate("/signup/hobbies");

    // try {
    //   // make axios call
    //   const copy = { ...formData };
    //   delete copy["confirmPassword"];
    //   await signUp(copy);
    //   navigate("/");
    //   // reroute to main page
    // } catch (err) {
    //   // set errors
    //   setErrors(err);
    // }
  }

  switch (step) {
    case 1:
      return (
        <SignUpForm next={handleNext} values={signUpValues}/>
      )
    case 2:
      return (
        <HobbyForm prev={prevStep} next={nextStep} values={hobbiesValues}/>
      )
    case 3:
      return (
        <InterestForm prev={prevStep} next={nextStep} values={interestsValues}/>
      )
  }

  //HOBIES FORM
    /*
      const [formData, setFormData] = useState(hobbiesValues);

      if (formData.length === 0) {
        return singular input field
      } else {
        return an input field for each element in hobbiesValues
      }
    */

  // return (
  //   <Form className="SignUpForm container" onSubmit={handleSubmit}>
  //     <Form.Text as="h1" className="SignUpForm-title mt-3">Sign Up</Form.Text>
  //     <Form.Group>
  //       <Form.Label>Email:</Form.Label>
  //       <Form.Control
  //         value={formData.email}
  //         type="email"
  //         name="email"
  //         onChange={handleChange}
  //         required
  //       />
  //     </Form.Group>
  //     <Form.Group>
  //       <Form.Label>Password:</Form.Label>
  //       <Form.Control
  //         value={formData.password}
  //         type="password"
  //         name="password"
  //         onChange={handleChange}
  //         required
  //       />
  //     </Form.Group>
  //     <Form.Group>
  //       <Form.Label>Confirm Password:</Form.Label>
  //       <Form.Control
  //         value={formData.confirmPassword}
  //         type="password"
  //         name="confirmPassword"
  //         onChange={handleChange}
  //         required
  //       />
  //     </Form.Group>
  //     <Form.Group>
  //       <Form.Label>First Name:</Form.Label>
  //       <Form.Control
  //         value={formData.firstName}
  //         name="firstName"
  //         onChange={handleChange}
  //         required
  //       />
  //     </Form.Group>
  //     <Form.Group>
  //       <Form.Label>Last Name:</Form.Label>
  //       <Form.Control
  //         value={formData.lastName}
  //         name="lastName"
  //         onChange={handleChange}
  //         required
  //       />
  //     </Form.Group>
  //     <Form.Group>
  //       <Form.Label>Zipcode:</Form.Label>
  //       <Form.Control
  //         value={formData.zip}
  //         name="zip"
  //         onChange={handleChange}
  //         required
  //       />
  //     </Form.Group>
  //     {errors.length > 0 && <MyAlert messages={errors} />}
  //     <Button as="button" className="btn btn-primary">
  //       Next
  //     </Button>
  //   </Form>
  // );
}

export default SignUpFormControl;
