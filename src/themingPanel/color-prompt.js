import React, { Component } from 'react';
import { connect } from "react-redux";
import ColorPicker from './color-picker';
import './color-prompt.css'

class ColorPrompt extends Component {
    state = {
        color: this.props.savedColor,
        type: this.props.type,
        index: this.props.index,
        showPicker: false
    };

    onChange(value) {
        this.props.setColor(value);
    }


    render() {
        return (
            <div className="colorPrompt" style={{ border: `1px solid ${this.props.savedColor}` }}>
                <span>{this.state.type} {this.state.index + 1}</span>
                <input type="text" placeholder="#..." onChange={(e) => this.onChange(e.target.value)} value={this.props.savedColor}/>
                <button onClick={() => this.setState({ showPicker: !this.state.showPicker })}>Choose</button>
                {this.state.showPicker ? <div className="popup"><ColorPicker background = {this.props.savedColor} /></div> : null}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        savedColor: state.color,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setColor: (color) => {
            dispatch({
                type: "SET_COLOR",
                payload: color
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPrompt);