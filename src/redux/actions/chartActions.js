import * as types from "./actionTypes";
import * as chartApi from "../../api/chartApi";


export function createChart(chart) {
    return { type: types.CREATE_CHART, chart};
}

export function loadChartsSuccess(charts) {
    return { type: types.LOAD_CHARTS_SUCCESS, charts};
}

export function createChartSuccess(chart) {
    return { type: types.CREATE_CHART_SUCCESS, chart};
}

export function updateChartSuccess(chart) {
    return { type: types.UPDATE_CHART_SUCCESS, chart};
}


export function loadCharts() {
    return function (dispatch) {
        return chartApi
            .getCharts()
            .then(charts => {
                dispatch(loadChartsSuccess(charts));
        })
        .catch(error => {
            throw error;
        });
    };
}

export function saveChart(chart) {
    //eslint-disable-next-line no-unused-vars
    return function(dispatch, getState) {
        return chartApi
            .saveChart(chart)
            .then(savedChart => {
                chart.id
                    ? dispatch(updateChartSuccess(savedChart))
                    : dispatch(createChartSuccess(savedChart));
            })
            .catch(error => {
                throw error;
            });
    };
}