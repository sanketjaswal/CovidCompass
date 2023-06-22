import React, { useEffect } from "react";
import "./detailedInfo.css";
import { DetailSlots } from "./detailSlots";

export const DetailedInfo = ({ SelectedInfo, flagInfo }) => {
  useEffect(() => {});

  // Convert UNIX Time to GMT
  let updtedTime = "";
  const convertTimestamptoTime = () => {
    let unixTimestamp = SelectedInfo.updated;
    let dateObj = new Date(unixTimestamp);
    let utcString = dateObj.toUTCString();
    updtedTime = utcString.slice(-24, -3);
    return updtedTime;
  };

  return (
    <div className="detailedCont">
      <div className="DetailHolder">
        <DetailSlots
          sName={"THIS"}
          lName={"COUNTRY"}
          data={SelectedInfo.country}
          color={"cadetblue"}
        />
        <DetailSlots
          sName={"TOTAL"}
          lName={"POPULATION"}
          data={SelectedInfo.population}
          color={"#cabc38"}
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
        <DetailSlots flagInfo={flagInfo.flag} />
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
          color={"turquoise"}
        />
        <DetailSlots
          sName={"LAST"}
          lName={"UPDATED"}
          data={convertTimestamptoTime()}
          color={"grey"}
        />
      </div>
    </div>
  );
};
