import * as types from "./actionTypes";
import * as patientApi from "../../api/patientApi";


export function createPatient(patient) {
    return { type: types.CREATE_PATIENT, patient};
}

export function loadPatientSuccess(patients) {
    return { type: types.LOAD_PATIENTS_SUCCESS, patients};
}

export function createPatientSuccess(patient) {
    return { type: types.CREATE_PATIENT_SUCCESS, patient};
}

export function updatePatientSuccess(patient) {
    return { type: types.UPDATE_PATIENT_SUCCESS, patient};
}

export function loadPatients() {
    return function (dispatch) {
        return patientApi
            .getPatients()
            .then(patients => {
                dispatch(loadPatientSuccess(patients));
        })
        .catch(error => {
            throw error;
        });
    };
}

export function savePatient(patient) {
    //eslint-disable-next-line no-unused-vars
    return function(dispatch, getState) {
        return patientApi
            .savePatient(patient)
            .then(savedPatient => {
                patient.id
                    ? dispatch(updatePatientSuccess(savedPatient))
                    : dispatch(createPatientSuccess(savedPatient));
            })
            .catch(error => {
                throw error;
            });
    };
}