import store from "../config/store";
import { SPRITE_SIZE } from "../config/constants";


export function makeRequest(number = 1) {
  // API connection code
  store.dispatch({
    type: "UPDATE_MAP_STORE",
    payload: {
      loaded: false,
      tiles: [],
      level: number
    },
  })
  fetch(
    `https://cors-anywhere.herokuapp.com/https://vim-back-end.herokuapp.com/${number}`
  )
    .then((res) => res.json())
    .then(
      (result) => {
        store.dispatch({
          type: "UPDATE_MAP_STORE",
          payload: {
            loaded: true,
            tiles: [...result.mapArray],
            level: number
          },
        })
        store.dispatch({
          type: "UPDATE_PLAYER_STORE",
          payload: {
            position: [result.startingPoint.x * SPRITE_SIZE, result.startingPoint.y * SPRITE_SIZE],
            walkIndex: 0
          }
        })
      }
    );
}


