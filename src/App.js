import "./App.css";
import React, { useState, useEffect } from "react";
import { Starticon } from "./Components/starticon";
import { Navbar } from "./Components/navbar";
import { WorldSVG } from "./Components/worldsvg";
import { Infomation } from "./Components/info";
import { DetailedInfo } from "./Components/detailedInfo";

function App() {
  //Name Tag
  const [Response, setResponse] = useState("hello");
  const [TargetE, setTargetE] = useState("COVID!9");
  const [SelectedInfo, setSelectedInfo] = useState("haha");
  const [flagInfo, setflagInfo] = useState("");

  useEffect(() => {
    setTimeout(() => {
      startFunctions();
    }, 1000);
  }, []);

  //start functions
  const startFunctions = () => {
    document.getElementsByClassName("startCont")[0].style.opacity = "0";
    document.getElementsByClassName("startCont")[0].style.transform =
      "scale(0)";
    document.getElementById("svgworld").style.strokeWidth = 0.7;
    setTimeout(() => {
      document.getElementById("navbar").style.opacity = 1;
    }, 500);
    getCovid();
  };

  //All countries data API fetch
  let response;

  async function getCovid() {
    response = await fetch(`https://disease.sh/v3/covid-19/countries`);
    response = await response.json();
    setResponse(response);
    console.log(response);
  }

  //get infomation from the response
  let ctryFound = {};
  const getInfo = (contryName) => {
    let listSearch = Response;
    for (let i = 0; i < listSearch.length; i++) {
      if (listSearch[i].country === contryName) {
        ctryFound = listSearch[i];
        // console.log(ctryFound.countryInfo.flag);
        setSelectedInfo(ctryFound);

        setflagInfo(ctryFound.countryInfo);
        ShowInfoBox();
      } else if (contryName === "not found") {
        setSelectedInfo("");
        setflagInfo("");
        document.getElementsByClassName("infoContainer")[0].style.opacity = 0;
      }
    }
  };

  // show info little box on country search or click
  const ShowInfoBox = () => {
    setTimeout(() => {
      document.getElementsByClassName("infoContainer")[0].style.opacity = 1;
      document.getElementsByClassName("infoContainer")[0].style.transform =
        "scale(1)";
    }, 500);
  };

  // show detailed infomation of countries
  const getDetailedInfo = () => {
    document.getElementsByClassName("infoContainer")[0].style.opacity = 0;
    document.getElementsByClassName("NameTag")[0].style.opacity = 0;
    document.getElementsByClassName("NameTag")[0].style.left = "240px";
    document.getElementsByClassName("homebtn")[0].style.opacity = 1;
    document.getElementsByClassName("detailedCont")[0].style.opacity = 1;
    document.getElementsByClassName("detailedCont")[0].style.zIndex = 1;
    document.getElementsByClassName("detailedCont")[0].style.transform =
      "scale(1)";
  };

  // hide detailed infomation of countries
  const hideDetailInfo = () => {
    document.getElementsByClassName("infoContainer")[0].style.opacity = 0;
    document.getElementsByClassName("detailedCont")[0].style.transform =
      "scale(10)";
    document.getElementsByClassName("NameTag")[0].style.opacity = 1;
    document.getElementsByClassName("NameTag")[0].style.left = "80px";
    document.getElementsByClassName("homebtn")[0].style.opacity = 0;
    document.getElementsByClassName("detailedCont")[0].style.opacity = 0;
    document.getElementsByClassName("detailedCont")[0].style.zIndex = -1;
    setTargetE("COVID!9");
  };
  return (
    <div className="App">
      <div className="CONTAINER">
        <Starticon />
        <Navbar
          TargetE={TargetE}
          getInfo={getInfo}
          setTargetE={setTargetE}
          ShowInfoBox={ShowInfoBox}
          hideDetailInfo={hideDetailInfo}
        />
        <DetailedInfo SelectedInfo={SelectedInfo} flagInfo={flagInfo} />
        <Infomation
          SelectedInfo={SelectedInfo}
          flagInfo={flagInfo}
          getDetailedInfo={getDetailedInfo}
        />
        <WorldSVG
          setTargetE={setTargetE}
          getInfo={getInfo}
          ShowInfoBox={ShowInfoBox}
        />
        <script
          type="text/javascript"
          src="./Components/assets/conryArray.js"
        />
      </div>
    </div>
  );
}

export default App;
