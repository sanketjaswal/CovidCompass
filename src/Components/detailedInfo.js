import React, { useEffect } from "react";
import "./detailedInfo.css";
import { DetailSlots } from "./detailSlots";

export const DetailedInfo = ({ SelectedInfo, flagInfo }) => {
  // useEffect(() => {
  // }, [SelectedInfo]);

  return (
    <div className="detailedCont">
      <div className="DetailHolder">
        <DetailSlots
          sName={"THIS"}
          lName={"COUNTRY"}
          data={SelectedInfo.country}
          color={"rgb(62, 157, 181)"}
          // flagInfo={flagInfo.flag}
        />
        <DetailSlots flagInfo={flagInfo.flag} />
        <DetailSlots
          sName={"TOTAL"}
          lName={"POPULATION"}
          data={SelectedInfo.population}
          color={"grey"}
        />
        <DetailSlots
          sName={"TOTAL"}
          lName={"RECOVERED"}
          data={SelectedInfo.recovered}
          color={"rgb(88, 181, 62)"}
        />
        <DetailSlots
          sName={"TOTAL"}
          lName={"DEATH"}
          data={SelectedInfo.deaths}
          color={"rgb(196, 92, 50)"}
        />
        <DetailSlots
          sName={"TOTAL"}
          lName={"ACTIVE"}
          data={SelectedInfo.active}
          color={"#ff3b3b"}
        />
        <DetailSlots
          sName={"TOTAL"}
          lName={"CONFIRMED"}
          data={SelectedInfo.cases}
          color={"#cabc38"}
        />
      </div>
    </div>
  );
};
