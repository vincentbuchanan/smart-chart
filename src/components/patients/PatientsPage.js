import React from "react";
import {connect} from 'react-redux';
import * as patientActions from '../../redux/actions/patientActions';
import * as chartActions from '../../redux/actions/chartActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import PatientList from './PatientList';


class PatientsPage extends React.Component {
  componentDidMount() {
    const { patients, charts, actions } = this.props;
    if (patients.length === 0) {
      console.log("loadPatients from PatinetPage");
      actions.loadPatients().catch(error => {
        alert("Loading Patients failed " + error);
      })
    }

    if (charts.length === 0) {
      console.log("loadChart from PatientPage");
      actions.loadCharts().catch( error => {
        alert("Loading Charts failed " + error );
          })
    }
  
  }

  render() {
    return (
      <>            
        <h2>Patients</h2>
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-course"
          onClick={() => this.setState({ redirectToAddPatientPage: true })}
        >
          Add Patient
        </button>
       <PatientList patients={this.props.patients} />
       </>
    );
  }
}

PatientsPage.propTypes = {
  patients: PropTypes.array.isRequired,
  charts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  //dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    patients: state.patients.length === 0 ? [] : state.patients,
    charts: state.charts,
    patient: state.patient
  };
}


// determines which actions are available in this component
function  mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadPatients: bindActionCreators(patientActions.loadPatients, dispatch),
      loadCharts: bindActionCreators(chartActions.loadCharts, dispatch)  
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  ) (PatientsPage);
