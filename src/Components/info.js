import React from "react";
import "./info.css";

export const Infomation = ({ SelectedInfo, flagInfo, getDetailedInfo }) => {
  // show get more detail popup
  const showDetailBtn = () => {
    document.getElementsByClassName("infoMore")[0].style.opacity = 1;
  };

  // hide get more detail popup

  const hideDetailBtn = () => {
    document.getElementsByClassName("infoMore")[0].style.opacity = 0;
  };

  return (
    <div
      className="infoContainer"
      onClick={() => getDetailedInfo()}
      onMouseOver={() => {
        showDetailBtn();
      }}
      onMouseLeave={() => {
        hideDetailBtn();
      }}
    >
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
      <p className="infoMore">Click for more</p>
    </div>
  );
};
