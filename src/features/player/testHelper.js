import store from "../../config/store";

function addToStoreBlockingTiles(tileMap) {
  var tiles = []
  tileMap.forEach(row => {
    var subMap = []
    row.forEach(tile => {
      subMap.push({"value":"SC4","x":32,"y":224,"blocked":tile})
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

export { addToStoreBlockingTiles }