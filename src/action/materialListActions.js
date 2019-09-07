import * as types from './actionTypes';

export const setMaterialStock = (cakeList) => {
	return {
		type: types.SET_MATERIAL_STOCK,
		materialList,
	};
};

export default {
	setMaterialStock,
};
