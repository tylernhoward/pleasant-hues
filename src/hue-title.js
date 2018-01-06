import React, { Component } from 'react';
import './hue-title.css'

class HueTitle extends Component {
    render() {
        // TODO Automate this with a prop and an index,that automatically colors the letters.
        return (
            <div className = "hueTitle">
            <h1 className="App-title">
                <span id="l1">P</span>
                <span id="l2">L</span>
                <span id="l3">E</span>
                <span id="l4">A</span>
                <span id="l5">S</span>
                <span id="l6">A</span>
                <span id="l7">N</span>
                <span id="l8">T</span>
                &nbsp;
                <span id="l9">H</span>
                <span id="l10">U</span>
                <span id="l11">E</span>
                <span id="l12">S</span>
            </h1>
            <small className="App-intro">
                Create your theme below
            </small>
            </div>
        );
    }
}
export default HueTitle;