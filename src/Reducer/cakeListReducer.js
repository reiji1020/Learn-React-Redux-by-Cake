import { cloneDeep } from 'lodash';
import * as types from '../action/actionTypes';

const initialState = {
	cakeList: [],
	funds: 10000,
};

export default function cakeListReducer(state = initialState, action) {
	const newState = cloneDeep(state);
	switch (action.type) {
		case types.SET_CAKE_STOCK:
			newState.cakeList = action.cakeList;
			return newState;
		case types.SELL_SHORTCAKE:
			newState.cakeList[0].stock -= 1;
			newState.funds += 350;
			return newState;
		default:
			return state;
	}
}
