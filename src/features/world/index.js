import React from "react";
import Map from "../map";
import Player from "../player";
import "./world.css";
import { makeRequest } from "../../components/API";
// import store from "../../config/store";

makeRequest();

function World(props) {
  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "480px",
        margin: "20px",
      }}
    >
      <Map />
      <Player />    
    </div>
  );
}

export default World;
