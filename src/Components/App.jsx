import { React, useState } from "react";

export default function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [fullName, setFullName] = useState({ fName: "", lName: "" });

  function handleChange(event) {
    const { value, name } = event.target;
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  function handleHover() {
    setIsMouseOver(true);
  }
  function handleOutHover() {
    setIsMouseOver(false);
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <input
        type="text"
        name="fName"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lName"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleHover}
        onMouseOut={handleOutHover}
      >
        Submit
      </button>
    </div>
  );
}
