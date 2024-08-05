import "./App.css";
import React, { useState } from "react";
import cities from "./cities";

function App() {
  const [search, setSearch] = useState("");
  const inputhandle = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <center>
        <h1 className="mainheading">ENTER CITIES TO SEARCH . . .</h1>
        <input
          type="text"
          value={search}
          onChange={inputhandle}
          className="inputstyle"
        />
        {cities
          .filter((item) => item.City.toLowerCase().includes(search.toLowerCase()))
          .map((item) => {
            return (
              <div className="city">
                <h4 className="subheading">{item.City} - {item.State}</h4>
              </div>
            );
          })}
      </center>
    </div>
  );
}

export default App;
