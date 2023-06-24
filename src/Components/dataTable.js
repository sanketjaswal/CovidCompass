import React, { useState, useEffect } from "react";
import "./dataTable.css";
import { Tablerow } from "./tableRow";

export const DataTable = () => {
  // const courses = ["12345678", "7410852963", "753951456"];
  let res = [
    { 0: "sanket", 1: "jaswal" },
    { 0: "shubham", 1: "jas" },
  ];
  const [Resp, setResp] = useState(res);

  useEffect(() => {
    getCovid2();
  }, []);

  let response2;

  async function getCovid2() {
    response2 = await fetch(`https://disease.sh/v3/covid-19/countries`);
    response2 = await response2.json();
    setResp(response2);
    // console.log(response2);
  }

  let input, table, tr, td, txtValue;
  function countrySearch() {
    input = document.getElementById("searchBar").value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(input) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  return (
    <div className="tableContainer">
      <div className="tableHeader">
        <h1>COVID!9 Tracker</h1>
        <input
          type="text"
          id="searchBar"
          onKeyUp={() => countrySearch()}
          placeholder="Search for Countries.."
        ></input>
      </div>
      <div className="tableHolder">
        <table id="myTable">
          <thead>
            <tr>
              {/* <th>Flag</th> */}
              <th>Country</th>
              <th>Total Cases</th>
              <th>Total Deaths</th>
              <th>Total Recovered</th>
              <th>Active Cases</th>
              <th>Total Tests</th>
              <th>Critical</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {Resp.map((singleInfo) => (
              <Tablerow
                key={res.id}
                singleInfo={singleInfo}
                flagInfo={singleInfo.countryInfo}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
