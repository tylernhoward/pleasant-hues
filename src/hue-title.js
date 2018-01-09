import React, { Component } from 'react';
import './hue-title.css'

class HueTitle extends Component {
    state = {
        titleLetters: []
    };
    componentDidMount(){
        this.setState({ titleLetters: this.props.title.toUpperCase().split('') })
        this.createLetters();
    }
    createLetters() {
        var letters = [];
        for (var i = 1; i <= 13; i++) {
            letters.push(<span id={"l"+i} key= {i}>{this.state.titleLetters[i-1]}</span>);
        }
        return letters;
    }
    render() {
        // TODO Automate this with a prop and an index,that automatically colors the letters.
        return (
            <div className = "hueTitle">
            <h1 className="App-title">
                {this.createLetters()}
            </h1>
            <small className="App-intro">
                Create your theme below
            </small>
            </div>
        );
    }
}
export default HueTitle;