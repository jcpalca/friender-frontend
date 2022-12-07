import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FrienderApi from "./api";
import { useState } from "react";

function AddPhotoForm() {
  const [image, setImage] = useState({
    image: ""
  });

  console.log("AddPhotoForm", image);

  function handleChange(evt: any) {
    const { name, value } = evt.target;
    setImage((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt: any) {
    evt.preventDefault();

    await FrienderApi.uploadPhoto(image);
  }

  // async function uploadImage(evt) {
  //   const result = await FrienderApi.uploadPhoto()
  // }

  return (
    <Form className="AddPhotoForm" onSubmit={handleSubmit}>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Image upload</Form.Label>
        <Form.Control type="file" multiple onChange={handleChange} />
      </Form.Group>
      <Button>Submit</Button>
    </Form>
  )
}

export default AddPhotoForm;
