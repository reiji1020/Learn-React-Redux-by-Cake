import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CommonPage from "./pages/commonPage";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import cakeListReducer from './Reducer/cakeListReducer';
import * as serviceWorker from "./serviceWorker";

let store = createStore(cakeListReducer);

ReactDOM.render(
    <Provider store={store}>
        <CommonPage />
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
