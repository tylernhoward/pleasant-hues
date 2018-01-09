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
        for (var i = 0; i <= 12; i++) {
            letters.push(<span id={"l"+(i%7)} key= {i}>{this.state.titleLetters[i]}</span>);
        }
        return letters;
    }
    render() {
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