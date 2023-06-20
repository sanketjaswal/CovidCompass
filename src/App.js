import "./App.css";
import React, { useState, useEffect } from "react";
import { Starticon } from "./Components/starticon";
import { Navbar } from "./Components/navbar";
import { WorldSVG } from "./Components/worldsvg";
import { ContryARR } from "./Components/assets/conryArray";

function App() {
  //Name Tag
  const [TargetE, setTargetE] = useState("Covid!9");
  // const [co]

  useEffect(() => {
    setTimeout(() => {
      startFunctions();
    }, 1000);
  }, []);
  //
  //start functions
  const startFunctions = () => {
    document.getElementsByClassName("startCont")[0].style.opacity = "0";
    document.getElementsByClassName("startCont")[0].style.transform =
      "scale(0)";
    document.getElementById("svgworld").style.strokeWidth = 0.7;
    setTimeout(() => {
      document.getElementById("navbar").style.opacity = 1;
    }, 1000);
    getCovid();
  };

  //All countries data API fetch
  var response, resLength;

  async function getCovid() {
    response = await fetch(`https://disease.sh/v3/covid-19/countries`);
    response = await response.json();
    console.log(response);
    resLength = response.length;
  }

  //get infomation from the response
  let ctryFound;
  let cInfo;
  const getInfo = (contryName) => {
    let listSearch = response;
    console.log(response[1].country);
    // console.log(TargetE);

    for (let i = 0; i < resLength; i++) {
      // if (listSearch[i].country === contryName) {
      //   ctryFound = listSearch[i];
      //   console.log(ctryFound);
      // }
    }

    // console.log(listSearch[0].country);
    // console.log(contryName);
    // let x = 0;
    // for (let i = 0; i < resLength; i++) {
    //   if (listSearch[i].country === TargetE) {
    //     ctryFound = listSearch[i];
    //     console.log(ctryFound);
    //   }
    // }
  };

  return (
    <div className="App">
      <div className="CONTAINER">
        <Starticon />
        <Navbar TargetE={TargetE} getInfo={getInfo} setTargetE={setTargetE} />
        <WorldSVG setTargetE={setTargetE} getInfo={getInfo} />
        {/* <DetailedInfo /> */}
        {/* <Info cInfo={cInfo}></Info> */}
      </div>
    </div>
  );
}

export default App;
