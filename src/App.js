import React, { Component } from 'react'
import './App.css'
import AddRemoveBulbs from './components/AddRemoveBulbs'

class App extends Component {
  render() {
    return (
      <>
        <div id="App-headerName">
          <h1>Welcome to Lights ON/OFF!</h1>
        </div>
        <AddRemoveBulbs />{/*Added the AddRemoveBulbs component*/}
      </>
    )
  }
}
export default App
