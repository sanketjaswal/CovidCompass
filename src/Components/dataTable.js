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
  const [RespAll, setRespAll] = useState(res);

  useEffect(() => {
    setTimeout(() => {
      getCovidAll();
      getCovid2();
    }, 5000);
  }, []);

  async function getCovid2() {
    let response2;
    response2 = await fetch(`https://disease.sh/v3/covid-19/countries`);
    response2 = await response2.json();
    for (let i = 0; i < response2.length; i++) {
      response2[i].flag = response2[i].countryInfo.flag;
    }
    setResp(response2);
  }

  const getCovidAll = async () => {
    let responseAll;
    responseAll = await fetch("https://disease.sh/v3/covid-19/all");
    responseAll = await responseAll.json();
    setRespAll(responseAll);
  };

  let input, table, tr, td, txtValue;
  function countrySearch() {
    input = document.getElementById("searchBar").value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    // console.log(tr);
    for (let i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        // console.log(indexOf(input));
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
              <th>Flag</th>
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
            <tr className="tableRow">
              <td>
                <div className="tableFlag"></div>
              </td>
              <td>World</td>
              <td>{RespAll.cases}</td>
              <td>{RespAll.deaths}</td>
              <td>{RespAll.recovered}</td>
              <td>{RespAll.active}</td>
              <td>{RespAll.tests}</td>
              <td>{RespAll.critical}</td>
              <td>{RespAll.population}</td>
            </tr>

            {Resp.map((singleInfo, index) => (
              <Tablerow key={index} singleInfo={singleInfo} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
