import * as types from "../actions/actionTypes";
import initialState from './initialState';

export default function patientReducer(state= initialState.patients, action) {
    switch(action.type) {
        case types.CREATE_PATIENT_SUCCESS:
            return [...state, { ...action.patient}];
        case types.UPDATE_PATIENT_SUCCESS:
            return state.map(patient =>
                patient.id === action.patient.id ? action.patient : patient
            );

        case types.LOAD_PATIENTS_SUCCESS:
            return action.patients;
        default:
            return state;
    }
}