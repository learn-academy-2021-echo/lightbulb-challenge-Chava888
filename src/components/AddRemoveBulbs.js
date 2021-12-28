import React, { Component } from 'react'
import SwitchOnOff from './SwitchOnOff'
import './AddRemoveBulbs.css'

export default class AddRemoveBulbs extends Component {

    //A state property to track an array that stores the lightbulbs
    constructor(props) {
        super(props)
        this.state = {
            arrayOfLights: []
        }
    }

    //Add lightbulb to the arrayOfLights - method
    addLights = () => {
        this.setState({ arrayOfLights: [...this.state.arrayOfLights, <SwitchOnOff />] })
    }

    //Remove the last lightbulb of the arrayOfLights - method
    removeLights = () => {
        let array = [...this.state.arrayOfLights]
        array.pop()
        this.setState({ arrayOfLights: array })
    }


    render() {
        return (
            <div>
                <div className="addRemoveBulbs-buttons">
                    <button onClick={this.addLights} className="AddRemoveBulbs-label">
                        <h2 className="addRemoveBulbs-h2">Add Bulb</h2>
                    </button>
                    <button onClick={this.removeLights} className="AddRemoveBulbs-label">
                        <h2 className="addRemoveBulbs-h2">Remove Bulb</h2>
                    </button>
                </div>
                <div className="addRemoveBulbs-list">
                    {this.state.arrayOfLights}
                </div>
            </div>
        )
    }
}
