import React, { useState } from "react";

export default function ExpInfo(props) {
  const [expData, setExpData] = useState({
    company: "",
    job: "",
    totalYears: "",
  });

  const handleChange = (event) => {
    // handles changing state
    const { name, value } = event.target;
    // newExpData = { ...expData, [name]: value };
    // setExpData(newExpData);
    setExpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(expData);
  };

  return (
    <fieldset>
      <legend>Experience Info</legend>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            name="company"
            id="company"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="job">Job: </label>
          <input
            type="text"
            name="job"
            id="job"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="totalYears">Total Years: </label>
          <input
            type="number"
            name="totalYears"
            id="totalYears"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Click</button>
      </form>
    </fieldset>
  );
}
