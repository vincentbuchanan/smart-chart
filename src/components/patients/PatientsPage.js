import React from "react";
import {connect} from 'react-redux';
import * as patientActions from '../../redux/actions/patientActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import PatientList from './PatientList';
import { Redirect } from "react-router-dom";

class PatientsPage extends React.Component {
  state = {
    redirectToAddPatientPage: false
  };
  componentDidMount() {
    const { patients, actions } = this.props;
    if (patients.length === 0) {
      actions.loadPatients().catch(error => {
        alert("Loading Patients failed " + error)
      });
    }
  }

  render() {
    return (
      <>    
        {this.state.redirectToAddPatientPage && <Redirect to="/patient" />}
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
  actions: PropTypes.object.isRequired
  //dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    patients: 
      state.patients.length === 0
        ? []
        :state.patients.map(patient => {
      return {
        ...patient        
      };
    })
  };
}

function  mapDispatchToProps(dispatch) {
  return {
    actions: {
       loadPatients: bindActionCreators(patientActions.loadPatients,dispatch)       
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  ) (PatientsPage);
