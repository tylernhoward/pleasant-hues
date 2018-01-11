import React, { Component } from 'react';
import {connect} from 'react-redux'
import { ChromePicker } from 'react-color';

class ColorPicker extends Component {
    state = {
        background: this.props.background,
    };

    handleChange = (color, event) => {
        this.setState({ background: color.hex });
        this.props.setColor(color.hex,this.props.index);
        console.log(this.state.background);
    };

    render() {
        return (
            <ChromePicker
                color={this.state.background}
                onChange={this.handleChange}
                onMouseDown={()=>console.log("mouse down")}
            />
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
        setColor: (color, index) => {
            dispatch({
                type: "SET_COLOR",
                id: index,
                payload: color
            });
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ColorPicker);