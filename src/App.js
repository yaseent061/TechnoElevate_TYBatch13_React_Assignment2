import React, { Component } from "react"
import Voter from "./Components/Voter"
import "./App.css"

export default class App extends Component {
  state = {
    Php: 0,
    Python: 0,
    Go: 0,
    Java: 0,
  }
  voting = (el) => {
    switch (el) {
      case "Php":
        return this.setState((prevState) => {
          return { Php: prevState.Php + 1 }
        })
      case "Python":
        return this.setState((prevState) => {
          return { Python: prevState.Python + 1 }
        })
      case "Go":
        return this.setState((prevState) => {
          return { Go: prevState.Go + 1 }
        })
      case "Java":
        return this.setState((prevState) => {
          return { Java: prevState.Java + 1 }
        })
      default:
        break
    }
  }
  render() {
    return (
      <div>
        {Object.keys(this.state).map((el) => {
          return (
            <Voter
              key={el}
              votes={this.state[el]}
              name={el}
              vote={() => this.voting(el)}
            />
          )
        })}
      </div>
    )
  }
}
