import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ChartForm from "./ChartForm";
import { loadPatients } from "../../redux/actions/patientActions";
import {loadCharts, saveChart} from '../../redux/actions/chartActions';
//import { chart} from "../../../tools/mockData";
//import { newChart, patient } from "../../../tools/mockData";


function ManageChartPage({   
  patient,
  patients,
  charts, 
  loadPatients,
  loadCharts,
  saveChart  
 })  {
  const [ errors, setErrors] = useState({}); 
  const [ chart, setChart]   = useState({});
    useEffect( () =>  {        
      if (patients.length === 0) {
        console.log("loadPatients from ManageChartPage");
        loadPatients().catch(error => {
          setErrors({error: "Loading Patient failed.",exception: error});
        })
      } else {
        //setPatient({ ...props.patient});
        console.log("patients in useEffect " + patients.length);
      }

      if (charts.length === 0) {
          console.log("loadChart from ManageChartPage");
          loadCharts().catch(error => {
              setErrors({error: "Loading Charts failed.",exception: error});
          });
      }
      else {
        console.log("charts in useEffect " + charts.length);
      }        
    }, []);

    function handleChange(event) {
      const { name, value } = event.target;
      setChart(prevChart => ({
        ...prevChart,
        [name]: name === "duration" ? parseInt(value, 10) : value
      }));
    }
  
    function handleSave(event) {
      event.preventDefault();
      saveChart(chart).then( () => {
        // history.push('/patients')   // lets do nothing here.
      });
    }
  
    return (<ChartForm
    patient={patient}
    patients={patients}
    charts={charts}            
    errors={errors}
    onChange={handleChange}
    onSave={handleSave} 
     />
     ); 

}

ManageChartPage.propTypes = {  
  patient: PropTypes.object.isRequired,
  charts: PropTypes.array.isRequired,
  patients: PropTypes.array.isRequired,
  loadCharts: PropTypes.func.isRequired, 
  loadPatients: PropTypes.func.isRequired, 
  saveChart: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getPatientBySlug(patients, slug) {
  if (patients && patients.length > 0) {
    return patients.find(patient => patient.slug === slug);
  }
  else {
    console.log("getPatientBySlug: " + slug + " returning {}");
    return {};
  }
  
}

// You could aument you find procedure to look for the (most recent Chart.)
export function getChartBySlug(patients, charts, slug) {  
  if (patients != undefined && patients != null) {
    const p = patients.find(patient => patient.slug === slug);

      if (charts != undefined && charts != null) {
        const c = charts.filter( chart => chart.patientID === p.id);
        return c[0];
      }
      else {
        console.log("charts undefined in getChartBySlug()");
      }

  }
  else {
    console.log("patients undefined in getChartBySlug()");
  }
  return null;    
  
}
// ownProps is a reference to the props being attached to this component.
// its a reference to the components own props.
function mapStateToProps(state, ownProps) {  
  const slug = ownProps.match.params.slug;  
  const patient = getPatientBySlug(state.patients, slug);  
  //const chart = getChartBySlug(state.patients,state.charts, slug); 
  return {
    patient,
    patients: state.patients.length === 0 ? [] : state.patients,
    charts: state.charts
  };
}

const  mapDispatchToProps = {
  loadPatients,
  loadCharts,
  saveChart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  ) (ManageChartPage);
