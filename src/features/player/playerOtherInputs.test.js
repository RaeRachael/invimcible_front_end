import { handleKeyDown } from "./movement.js"
import { addToStoreLocation, addToStoreTiles } from "./testHelper.js"
import store from "../../config/store"

describe('Other key press inputs', function() {

  it('Should return not in use for unlisted key press', function() {
    expect(handleKeyDown({ key: "z" })).toEqual("not in use")
  })

  it('If text area contains more than one character, backspace should not allow Vim to move', function() {
    addToStoreTiles([[false, false],[false, false]])
    handleKeyDown({key: ":"})
    store.dispatch({
      type: "ADD_LETTER",
      letters: ":h",
    })
    expect(handleKeyDown({ key: "Backspace"})).toEqual("text area still in use")

    addToStoreLocation([0, 0])
    handleKeyDown({key: "j"})

    expect(store.getState().player.position).toEqual([0, 0])

  })

  it('If text area contains one character, backspace should allow Vim to move', function() {
    addToStoreTiles([[false, false],[false, false]])
    handleKeyDown({key: ":"})
    store.dispatch({
      type: "ADD_LETTER",
      letters: ":",
    })
    handleKeyDown({ key: "Backspace"})
    addToStoreLocation([0, 0])
    handleKeyDown({key: "j"})
  
    expect(store.getState().player.position).toEqual([0, 32])
  })
})