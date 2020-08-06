import React from "react";
import { attemptMove } from "./movement.js";
import store from "../../config/store";


describe("Player", () => {

  it("can move east", () => {
    store.dispatch({
      type: "UPDATE_MAP_STORE",
      payload: {
        loaded: true,
        tiles: [[{"value":"SC4","x":32,"y":224,"blocked":false},{"value":"SPD","x":96,"y":224,"blocked":false}]],
        level: 1
      },
    })
    store.dispatch({
      type: "UPDATE_PLAYER_STORE",
      payload: {
        position: [0, 0],
            walkIndex: 0
      }
    })
    attemptMove("EAST")

    expect(store.getState().player.position).toEqual([32, 0])
  });
  
});
