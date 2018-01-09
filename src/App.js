import React, { Component } from 'react';
import './App.css';
import logo from './assets/gitIcon.png';
import ColorPane from './themingPanel/color-pane';
import PreviewPane from './previewPanel/preview-pane';
import HueTitle from './hue-title';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HueTitle title={"Pleasant Hues"}/>
        </header>
        <div className="wrapper">
          <ColorPane/>
          <PreviewPane/>
        </div>
        <footer className="footer">
          <p>Updated 2018</p>
          <a href="https://github.com/tylernhoward/pleasant-hues" role="button">
            <img alt="github icon" src={logo}/>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
