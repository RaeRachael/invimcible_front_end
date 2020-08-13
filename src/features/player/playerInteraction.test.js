import { handleKeyDown } from "./movement";
import store from "../../config/store";
import {SCRIPT_1} from "../../config/constants";
import { addToStoreTiles, addToStoreLocation } from "./testHelper.js"

describe("Player Interactions", () => {

  it("player P1 interaction", () => {
    addToStoreTiles([["P1", false]])
    addToStoreLocation([32, 0])
    handleKeyDown({ key: 'h' })

    expect(store.getState().player.position).toEqual([32, 0])
    expect(store.getState().scripts.scripts).toEqual(SCRIPT_1.P1)

  });

  it("player P2 interaction", () => {
    addToStoreTiles([["P2", false]])
    addToStoreLocation([32, 0])
    handleKeyDown({ key: 'h' })

    expect(store.getState().player.position).toEqual([32, 0])
    expect(store.getState().scripts.scripts).toEqual(SCRIPT_1.P2)
  });

  it("player P3 interaction", () => {
    addToStoreTiles([["P3", false]])
    addToStoreLocation([32, 0])
    handleKeyDown({ key: 'h' })

    expect(store.getState().player.position).toEqual([32, 0])
    expect(store.getState().scripts.scripts).toEqual(SCRIPT_1.P3)
  });
})
