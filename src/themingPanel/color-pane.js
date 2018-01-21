import React, { Component } from 'react';
import {connect} from 'react-redux';
import './color-pane.css'
import ColorPrompt from './color-prompt';

class ColorPane extends Component {
    createPrompts(type){
        var prompts = [];
        var a,b;
        switch(type){
            case "Color":
                a = 0;
                b = 6;
                break;
            case "Accent":
                a = 7;
                b = 13;
            break;
            default:
        }
        for(var i = a; i <= b; i++){
            prompts.push(<ColorPrompt type={type} index={i} key={i} />);
        }
        return prompts;
    }
    saveTheme(mode){
        console.log(mode + " Theme:");
        console.log(this.props.savedColors);
        
    }
    render(){
       return(
            <div className = "color-pane">
                <h4>Fill in the colors below</h4>
                <div className="colorOptions">
                    <div className="column">
                        {this.createPrompts("Color")}
                    </div>
                    <div className="column">
                       {this.createPrompts("Accent")}
                    </div>
                </div>
               <a className= "save-button" onClick={() => this.saveTheme("Slack")}>Save</a> 
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
        setColor: (color, index) => {
            dispatch({
                type: "SET_COLOR",
                id: index,
                payload: color
            });
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ColorPane);