import React, { Component } from 'react';
import './App.css';
import logo from './assets/gitIcon.png';
import ColorPane from './themingPanel/color-pane';
import PreviewPane from './previewPanel/preview-pane';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pleasant Hues</h1>
          <p className="App-intro">
            Create your theme below
          </p>
        </header>
        <hr/>
        <div className="wrapper">
          <ColorPane/>
          <PreviewPane/>
        </div>
        <hr/>
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
