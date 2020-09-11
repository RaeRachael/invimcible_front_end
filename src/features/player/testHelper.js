import store from "../../config/store";

function addToStoreTiles(tileMap) {
  var tiles = []
  tileMap.forEach(row => {
    var subMap = []
    row.forEach(tile => {
      if (tile ===true) {
        subMap.push({"value":"BB","x":32,"y":224,"blocked":true})
      } else if (tile === false){
        subMap.push({"value":"SC4","x":32,"y":224,"blocked":false})
      } else if (tile === "E") {
        subMap.push({"value":"E","x":32,"y":224,"blocked":false})
      } else {
        subMap.push({"value":`${tile}`,"x":32,"y":224,"blocked":true})
      }
    })
    tiles.push(subMap)
  });
  store.dispatch({
    type: "UPDATE_MAP_STORE",
    payload: {
      loaded: true,
      tiles: tiles,
      level: 1
    },
  })
}

function addToStoreLocation(location) {
  store.dispatch({
    type: "UPDATE_PLAYER_STORE",
    payload: {
      position: location,
      walkIndex: 0
    }
  })
}

export { addToStoreTiles, addToStoreLocation }