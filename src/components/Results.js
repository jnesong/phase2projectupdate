import React, {useState} from "react";
import blood from "./blood.gif";
import LabCard from "./LabCard";
import NormCard from "./NormCard";
import AllResults from "./AllResults";
import NormVSAbnorm from "./NormVSAbnorm";
import History from "./History";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";



function Results({ labArray, normArray, abnormalArray, history, setHistory}) {

  const allLabsList = labArray.map((labObj) => <NormCard
    key={labObj.id}
    lab={labObj}
  />)

  const normalLabList = normArray.map((labObj) => <NormCard
    key={labObj.id}
    lab={labObj}
  />)

  const abnormalLabList = abnormalArray.map((labObj) => <LabCard
    key={labObj.id}
    lab={labObj}
  />)

  const [page, setPage] = useState("/")

  return (
    <div id="about">
      <NavBar onChangePage={setPage} />
      <img className="image-cropper" src={blood} alt="blood gif" />
      <Switch>

        <Route path="/pathophysiology"> <AllResults allLabsList={allLabsList}/> </Route>

        <Route path="/history"> <History history={history} setHistory={setHistory}/> </Route>

        <Route exact path="/"> <NormVSAbnorm abnormalLabList={abnormalLabList} normalLabList={normalLabList} /> </Route>

        <Route path="*"> <h1>404 page not found 🥲</h1> </Route>


      </Switch>
    </div>
  );
}

export default Results;