import React, { Component } from 'react';
import './color-pane.css'
import ColorPrompt from './color-prompt';

class ColorPane extends Component {
    createPrompts(type){
        var prompts = [];
        if(type=="Color"){
            var a = 0;
            var b = 6;
        }else{
            var a = 7;
            var b = 13;
        }
        for(var i = a; i <= b; i++){
            prompts.push(<ColorPrompt type={type} index={i} key={i} />);
        }
        return prompts;
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
            </div>
       );
    }
}
export default ColorPane;