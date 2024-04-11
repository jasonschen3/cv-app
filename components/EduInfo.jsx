import React, { useState } from "react";

export default function EduInfo(props) {
  const [formData, setFormData] = useState({
    university: "",
    title: "Undergrad",
    gradYear: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // pass in prop to App.jsx
    props.onSubmit(formData);
  };
  return (
    <fieldset>
      <legend>EDU Info</legend>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="university">University: </label>
          <input
            type="text"
            id="university"
            name="university"
            placeHolder="Georgia Tech"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title: </label>
          <select id="title" name="title" onChange={handleChange}>
            <option value="undergrad">undergrad</option>
            <option value="grad">grad</option>
          </select>
        </div>
        <div>
          <label htmlFor="gradYear">Grad Year: </label>
          <input
            type="text"
            id="gradYear"
            name="gradYear"
            pattern="\d{4}"
            title="4 digits"
            onChange={handleChange}
            required
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </fieldset>
  );
}
