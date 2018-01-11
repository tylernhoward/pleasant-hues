import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var initialState = {
    colors: [
        { 'id': 0, 'color': '#123' },
        { 'id': 1, 'color': '#432' },
        { 'id': 2, 'color': '#765' },
        { 'id': 3, 'color': '#534' },
        { 'id': 4, 'color': '#867' },
        { 'id': 5, 'color': '#aaa' },
        { 'id': 6, 'color': '#fff' },
        { 'id': 7, 'color': '#eee' },
        { 'id': 8, 'color': '#543' },
        { 'id': 9, 'color': '#999' },
        { 'id': 10, 'color': '#143' },
        { 'id': 11, 'color': '#643' },
        { 'id': 12, 'color': '#865' },
        { 'id': 13, 'color': '#fff' },
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
