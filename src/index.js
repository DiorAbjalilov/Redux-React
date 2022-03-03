import React from "react";
import { render } from "react-dom";
import App from "./App";
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import allReducers from "./reducers";
const store=createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const app = (
    <Provider store={store}>
        <App />
    </Provider>
);
render(app, document.getElementById("root"));
