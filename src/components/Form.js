//import React, { useState } from "react";
import Input from "./Input";
import Labs from "./Labsdata";

function Form({ filterLabArrays, makeHistoryObj }) {

  // const [resultSaved, setResultSaved] = useState({})
  let resultData = {};

  function makeObjWithNewInput(inputObj) {
    resultData[inputObj.title] = inputObj;
  }

  function handleSubmit(e) {
    e.preventDefault()
    //setResultSaved(resultSaved);
    //console.log(resultData)
    filterLabArrays(resultData)
    makeHistoryObj(resultData)
  }

  const listLabInputs = Labs.map((lab) => (
    <Input
      key={lab.id}
      lab={lab}
      makeObj={makeObjWithNewInput}
    />))


  return (
    <div id="home">
      <h1 id="enterlabs">
        enter labs
      </h1>
      <form onSubmit={handleSubmit}>

        <div style={{ display: "inline-flex" }}>

          {listLabInputs}

        </div>

        <div style={{ alignItems: "center" }}>
          <button id="buttonSubmit" type="submit"> submit </button>
        </div>

      </form>
    </div>
  );
}

export default Form;