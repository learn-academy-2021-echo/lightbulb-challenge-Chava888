import React, { Component } from 'react'
import "./SwitchOnOff.css"
import LightBulb from './LightBulb'

/*Create two state properties: 
ligthSwitch property checks the state of on/off condition - a.k.a toggle
lightColor property provides the background color for the box*/

export default class SwitchOnOff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lightSwitch: false,
            lightColor: "white"
        }
    }

    /*The hangleToggleChange method defines the toggle event for off/on event*/
    handleToggleChange = () => {
        this.setState({ lightSwitch: !this.state.lightSwitch })
    }




    render() {
        let { lightSwitch } = this.state //Deconstruct the state object to obtain lightSwitch property

        /*The div switch-container has an event listener that will triggle the toggle method if clicked
        Based on the trigger for toggle, h1 tag and background color of box will change*/
        //The lightBulb component is rendered with the passed on state property lightSwitch
        //The text "I" is meant for on and the "O" is meant for off.
        return (
            <div className="switchOnOff-container">
                <h1 id="switchOnOff-title">Edison Light</h1>
                <LightBulb lightOn={this.state.lightSwitch} />

                <div className="wrapperTwoForButton">
                    <div className="wrapperOneForButton">
                        <div onClick={this.handleToggleChange} >
                            <div className="switch-box">
                                <div className="switch-label">
                                    <h1 id="icon">{lightSwitch ? "I" : "O"}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
