import React, { Component } from 'react';
import './color-pane.css'
import ColorPicker from './color-picker';

class ColorPane extends Component {
    render(){
       return(
            <div className = "color-pane">
                <h4>Fill in the colors below</h4>
                <div className="colorOptions">
                    <div className="column">
                        <div className="colorPrompt">
                        <span>Color 1</span>
                        <input type="text" placeholder= "#..."/>
                        <button>Choose</button>
                        </div>
                        <span>Color 2</span>
                        <input type="text" placeholder="#..." />
                        <button>Choose</button>
                        <span>Color 3</span>
                        <input type="text" placeholder="#..." />
                        <button>Choose</button>
                        <span>Color 4</span>
                        <input type="text" placeholder="#..." />
                        <button>Choose</button>
                        <span>Color 5</span>
                        <input type="text" placeholder="#..." />
                        <button>Choose</button>
                        <span>Color 6</span>
                        <input type="text" placeholder="#..." />
                        <button>Choose</button>
                        <span>Color 7</span>
                        <input type="text" placeholder= "#..."/>
                        <button>Choose</button>
                    </div>
                    <div className="column">
                        <span>Accent 1</span>
                        <input type="text" placeholder="#..." />
                        <button>Choose</button>
                        <span>Accent 2</span>
                        <input type="text" placeholder="#..." />
                        <button>Choose</button>
                        <span>Accent 3</span>
                        <input type="text" placeholder="#..." />
                        <button>Choose</button>
                        <span>Accent 4</span>
                        <input type="text" placeholder="#..." />
                        <button>Choose</button>
                        <span>Accent 5</span>
                        <input type="text" placeholder="#..." />
                        <button>Choose</button>
                        <span>Accent 6</span>
                        <input type="text" placeholder="#..." />
                        <button>Choose</button>
                        <span>Accent 7</span>
                        <input type="text" placeholder="#..." />
                        <button>Choose</button>
                    </div>
                </div>
            </div>
       );
    }
}
export default ColorPane;