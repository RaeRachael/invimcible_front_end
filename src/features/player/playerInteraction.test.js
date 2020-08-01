import handleKeyDown from "./movement";
import store from "../../config/store";
import {SCRIPT_1} from "../../config/constants";

describe("Player Interactions", () => {

  it("player P1 interaction", () => {
    store.dispatch({
      type: "UPDATE_MAP_STORE",
      payload: {
        loaded: true,
        tiles: [[{"value":"P1","x":32,"y":224,"blocked":true},{"value":"SPD","x":96,"y":224,"blocked":false}]],
        level: 1
      },
    })
    store.dispatch({
      type: "UPDATE_PLAYER_STORE",
      payload: {
        position: [32, 0],
            walkIndex: 0
      }
    })
    handleKeyDown('h')
    setTimeout(function (){
      expect(store.getState().player.position).toEqual([32, 0])
      // expect(store.getState().scripts.script).toEqual(SCRIPT_1.P1)
    }, 100)
  });

  it("player P2 interaction", () => {
    store.dispatch({
      type: "UPDATE_MAP_STORE",
      payload: {
        loaded: true,
        tiles: [[{"value":"P2","x":32,"y":224,"blocked":true},{"value":"SPD","x":96,"y":224,"blocked":false}]],
        level: 1
      },
    })
    store.dispatch({
      type: "UPDATE_PLAYER_STORE",
      payload: {
        position: [32, 0],
            walkIndex: 0
      }
    })
    handleKeyDown('h')
    setTimeout(function (){
      expect(store.getState().player.position).toEqual([32, 0])
      // expect(store.getState().scripts.script).toEqual(SCRIPT_1.P2)
    }, 100)
  });

  it("player P3 interaction", (done) => {
    store.dispatch({
      type: "UPDATE_MAP_STORE",
      payload: {
        loaded: true,
        tiles: [[{"value":"P3","x":32,"y":224,"blocked":true},{"value":"SPD","x":96,"y":224,"blocked":false}]],
        level: 1
      },
    })
    store.dispatch({
      type: "UPDATE_PLAYER_STORE",
      payload: {
        position: [32, 0],
            walkIndex: 0
      }
    })
    handleKeyDown('h')
    setTimeout(function (){
      expect(store.getState().player.position).toEqual([32, 0])
      // expect(store.getState().scripts.script).toEqual(SCRIPT_1.P3)
      done()
    }, 100)
  });
})
