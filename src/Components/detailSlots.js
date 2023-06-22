import React, { useEffect } from "react";
import "./detailSlots.css";

export const DetailSlots = ({ sName, lName, data, color, flagInfo }) => {
  useEffect(() => {}, [sName]);
  return (
    <div
      className="dSlotCont"
      style={{
        backgroundImage: `url(${flagInfo})`,
        backgroundColor: color,
      }}
    >
      <div className="dNameHolder">
        <p>{sName}</p>
        <h2>{lName}</h2>
      </div>
      <div className="dDataHolder">
        <h1>{data}</h1>
      </div>
    </div>
  );
};
