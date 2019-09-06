import { types } from '../action/actionTypes';

const initialState = {
	cakeData: [],
	funds: 0,
};

export default function cakeListReducer(state = initialState, action) {
	switch (action.types) {
		case types.SELL_SHORTCAKE:
			console.log('hoi!');
		default:
			break;
	}
}
