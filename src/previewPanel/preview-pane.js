import React, { Component } from 'react';
import './preview-pane.css'

class PreviewPane extends Component {
    render() {
        return (
            <div className="preview-pane">
                <div id="terminal">
                    <div id="termWindow">
                        <div className="termButtons">
                            <div className="termCircles" style={{backgroundColor:"tomato"}}></div>
                            <div className="termCircles" style={{backgroundColor:"gold"}}></div>
                            <div className="termCircles" style={{backgroundColor:"limegreen"}}></div>
                        </div>
                    </div>
                    <div id="interestTerm">
                        <p>Preview</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default PreviewPane;