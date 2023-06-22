import React from "react";
import "./navbar.css";
import { ContryARR } from "./assets/conryArray";

export const Navbar = ({
  TargetE,
  getInfo,
  setTargetE,
  ShowInfoBox,
  hideDetailInfo,
}) => {
  //Nav mover
  let countMenu = true;
  const moveNav = (evt) => {
    let targetM = evt.currentTarget.nextSibling;
    navHover(targetM.className);

    if (countMenu === true) {
      caller(targetM.className);
      countMenu = false;
    } else if (countMenu === false) {
      returner(targetM.className);
      countMenu = true;
    }
  };

  //Nav caller
  const caller = (targetM) => {
    document.getElementsByClassName(targetM)[0].style.opacity = 1;
    document.getElementsByClassName(targetM)[0].style.minWidth = "50%";
    document.getElementsByClassName("MText")[0].style.transform =
      "rotate(90deg)";
    document.getElementById("svgworld").style.stroke = "rgb(137, 137, 137)";
  };

  //Nav returner
  const returner = (targetM) => {
    document.getElementsByClassName(targetM)[0].style.opacity = 0;
    document.getElementsByClassName(targetM)[0].style.minWidth = "0%";
    document.getElementsByClassName("MText")[0].style.transform =
      "rotate(0deg)";
    // console.log(document.getElementById("svgworld"));
    document.getElementById("svgworld").style.stroke = "var(--worldColor)";
  };

  //   Nav retract timer
  const navHover = (targetForNAV) => {
    document.querySelectorAll("#navbar").forEach((e) => {
      e.addEventListener("mouseleave", function() {
        setTimeout(() => {
          returner(targetForNAV);
        }, 1000);
        countMenu = true;
      });
    });
  };

  //country color picker
  function colorPicker(min, max) {
    let randomNo = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    return randomNo;
  }

  //press enter while on search bar
  let words = [];
  let contryName;
  let cp;
  const grabEnter = () => {
    document.addEventListener("keydown", function(event) {
      let gg = document
        .getElementsByClassName("searchBar")[0]
        .value.toLowerCase();
      words = gg.split(" ");

      let contryArr = [];

      if (event.code === "Enter" && gg !== "") {
        cp = colorPicker();
        for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        contryName = words.join(" ");
        if (
          contryName.match(/usa/i) ||
          contryName.match(/uae/i) ||
          contryName.match(/drc/i)
        ) {
          console.log("its a match");
          contryName = contryName.toUpperCase();
          console.log(contryName);
          getInfo(contryName);
          setTargetE(contryName);
        } else if (typeof contryName == "string") {
          if (ContryARR.includes(contryName)) {
            console.log(contryName);
            setTargetE(contryName);
            ShowInfoBox();
          } else {
            setTargetE(` ${contryName} not found`);
            getInfo("not found");
          }

          getInfo(contryName);
        }
        contryArr = this.documentElement.getElementsByClassName(contryName);
        console.log(contryName);
      }
      // country   color changer on click
      let colorARR = [
        "skyblue",
        "gold",
        "purple",
        "navy",
        "orange",
        "limeGreen",
        "crimson",
        "brown",
        "blueviolet",
        "maroon",
      ];

      for (let i = 0; i < contryArr.length; i++) {
        contryArr[i].style.fill = colorARR[cp];
        setTimeout(() => {
          contryArr[i].style.fill = "grey";
        }, 4000);
        document.getElementsByClassName("searchBar")[0].value = "";
      }
    });
  };

  return (
    <div id="navbar">
      <div className="Menu" onClick={(e) => moveNav(e)}>
        <h2 className="MText">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </h2>
      </div>
      <div className="MenuTab">
        <div className="meuText">
          <div className="pa2">
            <input
              className="searchBar"
              type="search"
              placeholder="Search Country"
              onFocus={(e) => grabEnter(e)}
            />
          </div>
        </div>
        <div className="navBtns">
          <p className="meuText">STATS</p>
        </div>
      </div>
      <div className="homebtn" onClick={() => hideDetailInfo()}>
        <h1>Home</h1>
      </div>
      <div className="nameHolder">
        <div className="NameTag">
          <h1>{TargetE}</h1>
        </div>
      </div>
      <div className="navHolder"></div>
    </div>
  );
};
