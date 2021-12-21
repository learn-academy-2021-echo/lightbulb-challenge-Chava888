import React, { Component } from 'react'
import "./SwitchOnOff.css"


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
        return (
            <div onClick={this.handleToggleChange} className="switch-container">
                <h1>Light Bulb Challenge</h1>
                <div className={lightSwitch ? "switch-box switch-on" : "switch-box switch-off"}>
                    <h1 id="switch-label">{lightSwitch ? "On" : "Off"}</h1>
                </div>
            </div>
        )
    }
}
