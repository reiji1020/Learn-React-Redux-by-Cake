import { cloneDeep } from 'lodash';
import * as types from '../action/actionTypes';

const initialState = {
	materialList: [],
};

export default function materialListReducer(state = initialState, action) {
	const newState = cloneDeep(state);
	switch (action.type) {
		case types.SET_MATERIAL_STOCK:
			newState.materialList = action.materialList;
			return newState;
		default:
			return state;
	}
}
