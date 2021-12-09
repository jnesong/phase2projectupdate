import React, { useState, useEffect } from "react";
import Form from "./Form";
import Results from "./Results";
import Labs from "./Labsdata";


function App() {

  const [goldLabArray, setGoldLabArray] = useState([]);
  const [abnormalArray, setAbnormalArray] = useState([]);
  const [normArray, setNormArray] = useState([]);

  useEffect(() => { setGoldLabArray(Labs) }, []);


  function makeAbnormDataObj(resultData) {
    //console.log(resultData)

    let abnormData = {}
    let normData = {}
    let potassiumObj = resultData["potassium"]
    let calciumObj = resultData["calcium"]
    let sodiumObj = resultData["sodium"]
    let hemoglobinObj = resultData["hemoglobin"]
    let glucoseObj = resultData["blood glucose"]
    let wbcObj = resultData["white blood cells"]

    if ((potassiumObj.userInput > potassiumObj.max) || (potassiumObj.userInput < potassiumObj.min)) { abnormData[potassiumObj.title] = potassiumObj }
    else { normData[potassiumObj.title] = potassiumObj }

    if ((calciumObj.userInput > calciumObj.max) || (calciumObj.userInput < calciumObj.min)) { abnormData[calciumObj.title] = calciumObj }
    else { normData[calciumObj.title] = calciumObj }

    if ((sodiumObj.userInput > sodiumObj.max) || (sodiumObj.userInput < sodiumObj.min)) { abnormData[sodiumObj.title] = sodiumObj }
    else { normData[sodiumObj.title] = sodiumObj }

    if ((hemoglobinObj.userInput > hemoglobinObj.max) || (hemoglobinObj.userInput < hemoglobinObj.min)) { abnormData[hemoglobinObj.title] = hemoglobinObj }
    else { normData[hemoglobinObj.title] = hemoglobinObj }

    if ((glucoseObj.userInput > glucoseObj.max) || (glucoseObj.userInput < glucoseObj.min)) { abnormData[glucoseObj.title] = glucoseObj }
    else { normData[glucoseObj.title] = glucoseObj }

    if ((wbcObj.userInput > wbcObj.max) || (wbcObj.userInput < wbcObj.min)) { abnormData[wbcObj.title] = wbcObj }
    else { normData[wbcObj.title] = wbcObj }

    setNormArray(Object.values(normData))
    setAbnormalArray(Object.values(abnormData))

  }//end of makeAbnormDataObj function

  // console.log(normArray)
  // console.log(abnormalArray)

  const [history, setHistory] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/history")
      .then(r => r.json())
      .then(data => setHistory(data))
  }, [])


  function makeHistoryObj(resultData) {
    fetch("http://localhost:3001/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(resultData)
    })
      .then(r => r.json())
      .then(data => setHistory([...history, data]))
  }//end of makeHistoryObj function


  return (
    <div>
      <Form
        filterLabArrays={makeAbnormDataObj}
        makeHistoryObj={makeHistoryObj}
      />
      <Results
        labArray={goldLabArray}
        normArray={normArray}
        abnormalArray={abnormalArray}
        history={history}
        setHistory={setHistory}
      />
    </div>
  );
}

export default App;
