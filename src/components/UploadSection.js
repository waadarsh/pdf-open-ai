import React, { useState } from "react";
import { Input, Button, Form } from "semantic-ui-react";
import axios from "axios";

function UploadSection() {
  //For PDF upload
  const [file, setFile] = useState(null);
  const handleSubmit = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      axios
        .post("http://127.0.0.1:8000/upload", formData)
        .then((response) => {
          console.log("PDF file uploaded successfully");
        })
        .catch((error) => console.log(error));
    }
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Upload PDF file:</label>
          <Input
            type="file"
            name="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default UploadSection;
