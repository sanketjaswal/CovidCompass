import React, { useState, useEffect } from "react";
import allCoronaData from "./assets/allCoronaArray.json";

const Stats = () => {
  const [Newresp, setNewresp] = useState("Hello");

  useEffect(() => {}, []);
  getNewCOnts();

  //All countries data API fetch
  let casesDates;
  let totalCases;
  let totalDeaths;
  let totalRecovered;

  function getNewCOnts() {
    casesDates = Object.keys(allCoronaData.cases);
    console.log(casesDates);
    totalCases = Object.values(allCoronaData.cases);
    console.log(totalCases);
    totalDeaths = Object.values(allCoronaData.deaths);
    console.log(totalDeaths);
    totalRecovered = Object.values(allCoronaData.recovered);
    console.log(totalRecovered);
  }

  return (
    <div>
      <h1>Stats page</h1>
    </div>
  );
};
export default Stats;
