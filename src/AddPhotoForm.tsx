import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FrienderApi from "./api";
import { useState } from "react";

function AddPhotoForm() {
  // const [image, setImage] = useState({
  //   image: ""
  // });
  const [image, setImage] = useState("");

  console.log("AddPhotoForm", image);

  function handleChange(evt: any) {
    console.log('handleChange');
    // const { name, value } = evt.target;
    // setImage((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));
    setImage(evt.target.files[0])
  }

  async function handleSubmit(evt: any) {
    console.log("handleSubmit");
    evt.preventDefault();

    const data = new FormData();
    data.append('image', image);
    console.log(data.getAll("image"), "ALL THE DATA");
    console.log(image, "THIS IS THE IMAGE");

    // for(let key of data.entries()) {
    //   console.log(key[0], key[1]);
    // }

    await FrienderApi.uploadPhoto(data);
    // console.log(image, "THIS IS THE IMAGE IN BODY");
    // fetch("http://localhost:3001/images", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "image/jpeg"
    //   },
    //   body: image
    // }).then(() => {
    //   console.log("Image uploaded successfully!")
    // }).catch(error => {
    //   console.log(error);
    // });
  }

  // async function uploadImage(evt) {
  //   const result = await FrienderApi.uploadPhoto()
  // }

  return (
    <Form className="AddPhotoForm" onSubmit={handleSubmit}>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Image upload</Form.Label>
        <Form.Control name="image" type="file" multiple onChange={handleChange} />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default AddPhotoForm;
