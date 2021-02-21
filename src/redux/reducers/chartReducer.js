import * as types from "../actions/actionTypes";
import initialState from './initialState';

export default function chartReducer(state= initialState.charts, action) {
    switch(action.type) {
        case types.CREATE_CHART:
            return [...state, { ...action.chart}];
        case types.LOAD_CHARTS_SUCCESS:
            return action.charts;

            case types.UPDATE_CHART_SUCCESS:
                return state.map(chart =>
                    chart.id === action.chart.id ? action.chart : chart
                );
    
        default:
            return state;
    }
}