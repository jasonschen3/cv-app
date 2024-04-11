import { useState } from "react";
import "./App.css";

/* My components */
import Button from "./components/Button.jsx"; // NEED THE DOT IN FRONT
import EduInfo from "./components/EduInfo";
import ExpInfo from "./components/ExpInfo";
import GeneralInfo from "./components/GeneralInfo";

function App() {
  const [formData, setFormData] = useState("");

  // Modified to merge new data with existing formData
  const handleFormSubmit = (newData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...newData,
    }));
  };

  return (
    <>
      <h1 className="header">CV File</h1>
      <div className="App">
        <div className="add-info">
          <h2>Add</h2>
          <GeneralInfo onSubmit={handleFormSubmit} />
          <EduInfo onSubmit={handleFormSubmit} />
          <ExpInfo onSubmit={handleFormSubmit} />
        </div>
        <div className="display-info">
          {Object.keys(formData).length > 0 && (
            <div>
              <h2>Submitted Info</h2>
              {Object.entries(formData).map(([key, value]) => (
                <div className="info">
                  <p key={key}>{`${key}: ${value}`}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default App;
