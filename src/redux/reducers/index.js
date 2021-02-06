import { combineReducers } from 'redux';
import patients from './patientReducer';
import charts from './chartReducer';

const rootReducer = combineReducers({
    patients: patients,
    charts: charts
});

export default rootReducer;