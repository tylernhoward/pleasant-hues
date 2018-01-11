import React, { Component } from 'react';
import { connect } from "react-redux";
import ColorPicker from './color-picker';
import './color-prompt.css'

class ColorPrompt extends Component {
    state = {
        color: this.props.savedColor,
        showPicker: false
    };

    onChange(value) {
        this.props.setColor(value, this.props.index);
    }

    render() {
        return (
            <div className="colorPrompt" style={{ border: `2px solid ${this.props.savedColors[this.props.index].color}` }}>
                <span>{this.props.type} {(this.props.index %7) + 1}</span>
                <input type="text" placeholder="#..." onChange={(e) => this.onChange(e.target.value)} value={this.props.savedColors[this.props.index].color}/>
                <button onClick={() => this.setState({ showPicker: !this.state.showPicker })}>Choose</button>
                {this.state.showPicker ? <div className="popup"><ColorPicker background={this.props.savedColors[this.props.index].color} index={this.props.index}/></div> : null}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        savedColors: state.colors,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setColor: (color,index) => {
            dispatch({
                type: "SET_COLOR",
                id: index,
                payload: color
            });
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ColorPrompt);