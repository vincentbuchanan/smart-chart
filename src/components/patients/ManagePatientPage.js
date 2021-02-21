import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import { loadPatients, savePatient } from '../../redux/actions/patientActions';
import PropTypes from 'prop-types';
import PatientForm from "./PatientForm";
import { newPatient } from "../../../tools/mockData";


function ManagePatientPage({ 
  patients, 
  loadPatients,
  savePatient, 
  history,
  ...props
 })  {
  const [ patient, setPatient] = useState({...props.patient});
  const [ errors, setErrors] = useState({});
    useEffect( () =>  {

        if (patients.length === 0) {
          console.log("loadPatients from ManagePatientPage");
            loadPatients().catch(error => {
                setErrors({error: "Loading Patients failed.",exception: error});
                alert("Loading Patients failed " + error)
            });
          
        }
        else {          
          setPatient( { ...props.patient } );        
        }
        console.log("patients[" +patients.length + "] loaded!");

    }, [props.patient]);

    function handleChange(event) {
      const { name, value } = event.target;
      setPatient(prevPatient => ({
        ...prevPatient,
        [name]: value
      }));
    }
  
    function handleSave(event) {
      event.preventDefault();
      savePatient(patient).then( () => {
        history.push('/patients')
      });
    }
  
    return (<PatientForm
    patient={patient}
    errors={errors}
    onChange={handleChange}
    onSave={handleSave} 
     />
     ); 

}

ManagePatientPage.propTypes = {
  patient: PropTypes.object.isRequired,
  patients: PropTypes.array.isRequired,
  loadPatients: PropTypes.func.isRequired, 
  savePatient: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getPatientBySlug(patients, slug) {
  return patients.find(patient => patient.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const patient =
  slug && state.patients.length > 0
  ?getPatientBySlug(state.patients, slug)
  : newPatient;
  return {
    patient: patient,
    patients: state.patients,
  };
}

const  mapDispatchToProps = {
       loadPatients,
       savePatient
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  ) (ManagePatientPage);
