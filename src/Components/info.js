import React from "react";
import "./info.css";

export const Infomation = ({ SelectedInfo, flagInfo, getDetailedInfo }) => {
  //   console.log(flagInfo.flag);
  // console.log(SelectedInfo);
  return (
    <div className="infoContainer" onClick={() => getDetailedInfo()}>
      <div className="infoFlagCont">
        <img className="Flag" src={flagInfo.flag} alt="No Information" />
      </div>
      <div className="infoContinent">
        <h3>{SelectedInfo.continent}</h3>
      </div>
      <div className="infoActive">
        <p>Active : {SelectedInfo.active}</p>
      </div>
      <div className="infoDeaths">
        <p>Deaths : {SelectedInfo.deaths}</p>
      </div>
    </div>
  );
};
