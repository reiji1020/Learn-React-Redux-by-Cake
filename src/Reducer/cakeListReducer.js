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
		case types.SELL_CAKE:
			newState.cakeList.forEach((item, index) => {
				if (item.name === action.name) {
					newState.cakeList[index].stock -= 1;
				}
			});
			newState.funds += action.price;
			return newState;
		case types.MAKE_CAKE:
			newState.cakeList.forEach((item, index) => {
				if (item.name === action.name) {
					newState.cakeList[index].stock += 1;
				}
			});
			return newState;
		case types.BUY_MATERIAL:
			newState.funds -= action.price;
			return newState;
		default:
			return state;
	}
}
