import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FrienderApi from "./api";
import { useState } from "react";

function AddPhotoForm() {
  // const [images, setImage] = useState({
  //   images: ""
  // });
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  console.log("AddPhotoForm", images, "imageURLs", imageURLs);

  function handleChange(evt: any) {
    console.log('handleChange');
    // const { name, value } = evt.target;
    // setImage((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));
    setImages(evt.target.files);
  }

  async function handleSubmit(evt: any) {
    console.log("handleSubmit");
    evt.preventDefault();

    const data = new FormData();

    for (const key in images) {
      data.append('images[]', images[key]);
    }

    console.log(data.getAll("images[]"), "ALL THE DATA");
    console.log(images, "THIS IS THE IMAGE");

    // for(let key of data.entries()) {
    //   console.log(key[0], key[1]);
    // }

    //TODO: FIGURE OUT HOW TO ALLOW IMAGES ONLY
    const urls = await FrienderApi.uploadPhoto(data);
    console.log('URLs', urls);
    setImageURLs(urls);
    // console.log(images, "THIS IS THE IMAGE IN BODY");
    // fetch("http://localhost:3001/images", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "images/jpeg"
    //   },
    //   body: images
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
    <div className="AddPhotoForm">
      <Form className="AddPhotoForm" onSubmit={handleSubmit}>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Image upload</Form.Label>
          <Form.Control name="images" type="file" multiple onChange={handleChange} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
      <div className="AddPhotoForm-Images">
        {imageURLs.map(url => <img src={url} alt={url}/>)}
      </div>
    </div>
  )
}

export default AddPhotoForm;
