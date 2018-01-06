import React, { Component } from 'react';
import './color-pane.css'
import ColorPicker from './color-picker';

class ColorPane extends Component {
    render(){
       return(
            <div className = "color-pane">
                <h4>Fill in the colors below</h4>
                <span>Color 1</span>
                <input type="text" placeholder= "#..."/>
                <button>Choose</button>
                <p>3</p>
               <ColorPicker />
            </div>
       );
    }
}
export default ColorPane;