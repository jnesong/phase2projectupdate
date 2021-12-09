import React, { useState } from "react";

function Input({ lab, makeObj }) {

  const [patientLab, setPatientLab] = useState("0");

  function handleLabChange(event) {
    setPatientLab(event.target.value);
  }

  //console.log(patientLab)

  let inputObj = {
    title: lab.title,
    userInput: patientLab,
    id: lab.id,
    min: lab.min,
    max: lab.max,
    increased: lab.increased,
    decreased: lab.decreased,
    patho: lab.patho,
    interfer: lab.interfer
  }

  makeObj(inputObj)

  return (
    <div className="eachForm">
      <input
        onKeyPress={(event) => {
          if (!/[0-9]|\./.test(event.key) || //the key pressed is not the key for 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, or “.” OR
          (/\./.test(event.key) && patientLab.includes("."))) //it is a “.” AND the input value already includes a “.”
          {event.preventDefault();}}
        }
        className="input"
        type="text"
        onChange={handleLabChange}
        value={patientLab}
      />
      {<br />}
      <label>{lab.title} ({lab.unit})</label>
      {<br />}
      <p>{lab.id}</p>
    </div>
  );

}

export default Input;
