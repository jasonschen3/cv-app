import React, { useState } from "react";

export default function GeneralInfo(props) {
  const [formData, setFormData] = useState({
    name: "Jason",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents default submit (which needs backend)
    console.log("Form data submitted:", formData);
    // Add your submit logic here
    props.onSubmit(formData);
  };

  // htmlFor is different than for=""
  return (
    <fieldset>
      <legend>General Information</legend>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeHolder="333-333-3333"
            pattern="\d{10}"
            title="oops" // displys when pattern isn't matched
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </fieldset>
  );
}
