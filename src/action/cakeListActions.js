import * as types from './actionTypes';

export const setCakeStock = (cakeList) => {
	return {
		type: types.SET_CAKE_STOCK,
		cakeList,
	};
};

export const sellCake = (name, price) => {
	return {
		type: types.SELL_CAKE,
		name,
		price,
	};
};

export const makeCake = (name) => {
	return {
		type: types.MAKE_CAKE,
		name,
	};
};

export const buyMaterial = (price) => {
	return {
		type: types.BUY_MATERIAL,
		price,
	};
};

export default {
	setCakeStock,
	sellCake,
	makeCake,
	buyMaterial,
};
