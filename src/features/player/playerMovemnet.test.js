import React from "react";
import handleMovement from "./movement";
import handleKeyDown from "./movement";
import store from "../../config/store";
import Player from "./index.js";
import { shallow } from 'enzyme'

describe("Player", () => {

  it("can move east", (done) => {
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
    shallow(<Player />);

    var event = new KeyboardEvent('keydown', {'keyCode': '43'});
    document.dispatchEvent(event);

    setTimeout(function (){
      expect(store.getState().player.position).toEqual([32, 0])
      done()
    }, 100)
  });
  
});
