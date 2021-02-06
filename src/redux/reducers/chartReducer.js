import * as types from "../actions/actionTypes";
import initialState from './initialState';

export default function chartReducer(state= initialState.charts, action) {
    switch(action.type) {
        case types.CREATE_CHART:
            return [...state, { ...action.chart}];
        case types.LOAD_CHARTS_SUCCESS:
            return action.charts;
        default:
            return state;
    }
}