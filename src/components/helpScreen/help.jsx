import React from "react"
import store from "../../config/store"
import HelpScreenLevel1 from "./helpScreenLevel1.jsx"
import HelpScreenLevel2 from "./helpScreenLevel2.jsx"

export default class Help extends React.Component {
  getLevel() {
    return store.getState().map.level
  }
  render () {
    console.log(this.getLevel())
    if(this.getLevel() === 1) {
      return <HelpScreenLevel1 />
    } else {
      return <HelpScreenLevel2 />
    }
  }
}