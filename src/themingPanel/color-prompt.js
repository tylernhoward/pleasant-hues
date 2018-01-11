import React, { Component } from 'react';
import { connect } from "react-redux";
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
                <p>{this.props.savedColor}</p>
                <input type="text" placeholder="#..."/>
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