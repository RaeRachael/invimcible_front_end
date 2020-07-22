import React, { Component } from "react";

// processing a tile
function MapTile(props) {
  return props.value;
}

class LevelRender extends React.Component {
  constructor(props) {
    super();
    this.tiles = props
  }

  // processing a row
  MapRows(props) {
    return props.tiles.map((tile) => <MapTile value={tile} />);
  }

  // processing the map
  render() {
    return ( this.tiles.props.map((row) => (
      <div>
        <this.MapRows tiles={row} />
      </div>
    )));
  };
}

export default LevelRender
