import React, { Component } from 'react';
import './preview-pane.css'

class PreviewPane extends Component {
    render() {
        return (
            <div className="preview-pane">
                    <div id="window">
                        <div className="ctrlButtons">
                            <div className="ctrlCircles" style={{backgroundColor:"tomato"}}></div>
                            <div className="ctrlCircles" style={{backgroundColor:"gold"}}></div>
                            <div className="ctrlCircles" style={{backgroundColor:"limegreen"}}></div>
                        </div>
                    </div>
                    <div id = "terminal">
                    <p>asfdsadf</p>
                    </div>
            </div>
        );
    }
}
export default PreviewPane;