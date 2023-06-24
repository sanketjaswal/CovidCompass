import React from "react";
import "./dataTable.css";

export const Tablerow = ({ singleInfo, flagInfo }) => {
  // console.log(flagInfo[0]);
  return (
    <tr className="tableRow">
      {/* <td>
        <div
          className="tableFlag"
          style={
            {
              backgroundImage: `url(${""})`,
            }
          }
        ></div>
      </td> */}
      <td>{singleInfo.country}</td>
      <td>{singleInfo.cases}</td>
      <td>{singleInfo.deaths}</td>
      <td>{singleInfo.recovered}</td>
      <td>{singleInfo.active}</td>
      <td>{singleInfo.tests}</td>
      <td>{singleInfo.critical}</td>
      <td>{singleInfo.population}</td>
    </tr>
  );
};
