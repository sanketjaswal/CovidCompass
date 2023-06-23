import React, { useState, useEffect } from "react";
import allCoronaData from "./assets/allCoronaArray.json";
// import ApexCharts from "apexcharts";

const Stats = () => {
  const [Newresp, setNewresp] = useState("Hello");

  useEffect(() => {
    // setNewresp(doSomething());
    // console.log(Newresp);
  });
  // getNewCOnts();

  //All countries data API fetch
  let casesDates;
  let totalCases;
  let totalDeaths;
  let totalRecovered;

  function getNewCOnts() {
    casesDates = Object.keys(allCoronaData.cases);
    // console.log(casesDates);
    totalCases = Object.values(allCoronaData.cases);
    // console.log(totalCases);
    totalDeaths = Object.values(allCoronaData.deaths);
    // console.log(totalDeaths);
    totalRecovered = Object.values(allCoronaData.recovered);
    // console.log(totalRecovered);
  }

  const doSomething = async () => {
    const responseData = await fetch(
      `https://disease.sh/v3/covid-19/countries`
    );

    const data = await responseData.json();
    console.log(data);
    return data;
  };
  doSomething();

  return (
    <div id="chart">
      {/* {Newresp} */}
      {/* <h1>Stats page</h1> */}
    </div>
  );
};
export default Stats;
