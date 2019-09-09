import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommonPage from './pages/commonPage';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import cakeListReducer from './Reducer/cakeListReducer';
import materialListReducer from './Reducer/materialListReducer';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({ cakeProps: cakeListReducer, materialProps: materialListReducer });
let store = createStore(rootReducer);
ReactDOM.render(
	<Provider store={store}>
		<CommonPage />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
