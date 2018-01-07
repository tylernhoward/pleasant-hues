import React, { Component } from 'react';

class ColorPrompt extends Component {
    state = {
        type: this.props.type,
        index: this.props.index
    };

    render() {
        return (
            <div className="colorPrompt">
                <span>{this.state.type} {this.state.index}</span>
                <input type="text" placeholder="#..." />
                <button>Choose</button>
            </div>
        );
    }
}
export default ColorPrompt;