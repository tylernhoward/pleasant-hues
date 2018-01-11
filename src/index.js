import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const colorReducer = (state = {
    color: "#fff"
}, action) => {
    switch (action.type) {
        case "SET_COLOR":
            state = {
                ...state,
                color: action.payload
            };
            break;
    }
    return state;
};

const store = createStore(colorReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
