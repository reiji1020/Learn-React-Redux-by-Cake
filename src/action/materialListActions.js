import * as types from './actionTypes';

export const setMaterialStock = (materialList) => {
	return {
		type: types.SET_MATERIAL_STOCK,
		materialList,
	};
};

export const consumeMaterial = (name) => {
	return {
		type: types.CONSUME_MATERIAL,
		name,
	};
};

export const refillMaterial = (name) => {
	return {
		type: types.REFILL_MATERIAL,
		name,
	};
};

export default {
	setMaterialStock,
	consumeMaterial,
	refillMaterial,
};
