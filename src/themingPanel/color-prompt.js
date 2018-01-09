import React, { Component } from 'react';
import ColorPicker from './color-picker';
import './color-prompt.css'

class ColorPrompt extends Component {
    state = {
        type: this.props.type,
        index: this.props.index,
        showPicker: false
    };
    renderPicker(){
        if (!this.state.showPicker) return ''; 
        else return (<ColorPicker/>);
    }

    render() {
        return (
            <div className="colorPrompt">
                <span>{this.state.type} {this.state.index}</span>
                <input type="text" placeholder="#..." />
                <button onClick={() => this.setState({ showPicker: !this.state.showPicker })}>Choose</button>
                
                {this.state.showPicker ? <div className="popup"><ColorPicker /></div> : null}
                
            </div>
        );
    }
}
export default ColorPrompt;