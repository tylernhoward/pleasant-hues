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
                    <p>This is a preview</p>
                    </div>
                <div className="settings-button"><span className="fa fa-cog fa-2x"></span></div>

            </div>
        );
    }
}
export default PreviewPane;