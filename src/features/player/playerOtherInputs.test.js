import { handleKeyDown } from "./movement.js"
import { addToStoreLocation, addToStoreTiles } from "./testHelper.js"
import store from "../../config/store"

describe('Other key press inputs', function() {

  it('Should return not in use for unlisted key press', function() {
    expect(handleKeyDown({ key: "z" })).toEqual("not in use")
  })

  it('Should test backspace', function() {
    store.dispatch({
      type: "ADD_LETTER",
      letters: ":h",
    })

    expect(handleKeyDown({ key: "Backspace"})).toEqual("text area still in use")
  })

  it('Should test backspace', function() {
    addToStoreTiles([[false, false],[false, false]])
    store.dispatch({
      type: "ADD_LETTER",
      letters: ":",
    })
    handleKeyDown({ key: "Backspace"})
    addToStoreLocation([0, 0])
    handleKeyDown({key: "j"})
    console.log(store.getState().player.position)
  
    expect(store.getState().player.position).toEqual([0, 32])
  })
})