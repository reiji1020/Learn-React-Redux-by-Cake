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
		case types.CONSUME_MATERIAL:
			switch (action.name) {
				case 'ショートケーキ':
					// ショートケーキは卵1つ、小麦粉1つ、牛乳1つを消費する
					newState.materialList[0].stock -= 1;
					newState.materialList[1].stock -= 1;
					newState.materialList[2].stock -= 1;
					return newState;
				case 'チーズケーキ':
					// チーズケーキは卵1つ、小麦粉1つ、牛乳2つを消費する
					newState.materialList[0].stock -= 1;
					newState.materialList[1].stock -= 2;
					newState.materialList[2].stock -= 1;
					return newState;
				case 'シュークリーム':
					// シュークリームは卵1つ、小麦粉2つ、生クリーム2つを消費する
					newState.materialList[0].stock -= 2;
					newState.materialList[2].stock -= 1;
					newState.materialList[3].stock -= 2;
					return newState;
				case 'ロールケーキ':
					// ロールケーキは卵2つ、小麦粉2つ、牛乳1つ、生クリーム1つを消費する
					newState.materialList[0].stock -= 2;
					newState.materialList[1].stock -= 1;
					newState.materialList[2].stock -= 2;
					newState.materialList[3].stock -= 1;
					return newState;
				case 'モンブラン':
					// モンブランは卵1つ、小麦粉1つ、牛乳1つ、マロン1つを消費する
					newState.materialList[0].stock -= 1;
					newState.materialList[1].stock -= 1;
					newState.materialList[2].stock -= 1;
					newState.materialList[4].stock -= 1;
					return newState;
				default:
					return state;
			}
		case types.REFILL_MATERIAL:
			newState.materialList.forEach((item, index) => {
				if (item.name === action.name) {
					newState.materialList[index].stock += 1;
				}
			});
			return newState;
		default:
			return state;
	}
}
