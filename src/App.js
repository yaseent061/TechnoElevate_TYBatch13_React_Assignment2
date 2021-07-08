import React, { Component } from "react"
import "./App.css"
import Go from "./Components/voters/Go"
import Java from "./Components/voters/Java"
import Php from "./Components/voters/Php"
import Python from "./Components/voters/Python"
// import ColorChanger from "./Components/colorChanger/ColorChanger"

export default class App extends Component {
  // state = {
  //   color: "orangered",
  // }
  // colorPicker = (e) => {
  //   this.setState({ color: e.target.value })
  // }
  render() {
    // document.body.style.background = this.state.color
    return (
      <div>
        <Php />
        <Java />
        <Go />
        <Python />
        {/* <ColorChanger colorPicker={this.colorPicker} /> */}
      </div>
    )
  }
}
