import * as types from './actionTypes';

export const setCakeStock = (cakeList) => {
	return {
		type: types.SET_CAKE_STOCK,
		cakeList,
	};
};

export const sellShortCake = () => {
	return {
		type: types.SELL_SHORTCAKE,
	};
};

export default {
	setCakeStock,
	sellShortCake,
};
