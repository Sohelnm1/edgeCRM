import React from "react";
import FormInputs from "../form/FormInputs";
import addattachment from "../../css/addattachment.css";
import axios from "axios";

// const LabelStyled = styled.label`

// `

function AddAttachment() {
  const [file, setFile] = React.useState();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files);
  };

  const handleApi = async () => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post("url", formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <button onClick={handleApi}></button> */}

      <label class="label">
        <input type="file" name="file" onChange={handleChange} />
        <span className="material-icons material-icons-outlined">add</span>
        <span>Add Attachment</span>
      </label>
    </>
  );
}

export default AddAttachment;
