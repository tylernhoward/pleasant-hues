import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var initialState = {
    colors: [
        { 'id': 0, 'color': '#FF4136' },
        { 'id': 1, 'color': '#FF851B' },
        { 'id': 2, 'color': '#FFDC00' },
        { 'id': 3, 'color': '#2ECC40' },
        { 'id': 4, 'color': '#0074D9' },
        { 'id': 5, 'color': '#B10DC9' },
        { 'id': 6, 'color': '#F012BE' },
        { 'id': 7, 'color': '#FF4136' },
        { 'id': 8, 'color': '#FF851B' },
        { 'id': 9, 'color': '#FFDC00' },
        { 'id': 10, 'color': '#2ECC40' },
        { 'id': 11, 'color': '#0074D9' },
        { 'id': 12, 'color': '#B10DC9' },
        { 'id': 13, 'color': '#F012BE' },
    ]
};

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_COLOR":
            const updatedItems = state.colors.map(item => {
                if (item.id == action.id) {
                    console.log(action.payload);
                    return { ...item , 'color': action.payload }
                }
                return item
            });
            state = {
                ...state,
                colors: updatedItems
            };
            break;
    }
    return state;
};

const store = createStore(colorReducer);
store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
