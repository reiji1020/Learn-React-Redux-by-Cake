import * as types from '../action/actionTypes';

const initialState = {
	cakeList: [],
	funds: 0,
};

export default function cakeListReducer(state = initialState, action) {
	switch (action.type) {
		case types.SET_CAKE_STOCK:
			state.cakeList = action.cakeList;
			return state;
		case 'SELL_SHORTCAKE':
			state.cakeList[action.name].stock -= 1;
			state.funds += [action.price];
			return state;
		default:
			return state;
	}
}
