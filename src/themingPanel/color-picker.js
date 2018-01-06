import React, { Component } from 'react';
import { ChromePicker } from 'react-color';

class ColorPicker extends Component {
    state = {
        background: '#fff',
    };

    handleChange = (color, event) => {
        this.setState({ background: color.hex });
        console.log(this.state.background);
    };

    render() {
        return (
            <ChromePicker
                color={this.state.background}
                onChange={this.handleChange}
            />
        );
    }
}
export default ColorPicker;