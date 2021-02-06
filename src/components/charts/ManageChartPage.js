import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import { loadCharts, createChart, loadChartsSuccess, saveChart } from '../../redux/actions/chartActions';
import PropTypes from 'prop-types';
import ChartForm from "./ChartForm";
import { newChart } from "../../../tools/mockData";


function ManageChartPage({ 
  charts, 
  currentPatient,
  loadCharts,
  saveChart, 
  history,
  ...props
 })  {
  const [ patient, setPatient] = useState(currentPatient);
  const [ chart, setChart] = useState({});
  const [ errors, setErrors] = useState({});
    useEffect( () =>  {

        if (charts.length === 0) {
            loadCharts().catch(error => {
                setErrors({error: "Loading Charts failed.",exception: error});
                alert("Loading Charts failed " + error)
            });
        }
        else {          
          setChart( { ...props.chart } );        
        }

    }, [props.chart]);

    function handleChange(event) {
      const { name, value } = event.target;
      setChart(prevChart => ({
        ...prevChart,
        [name]: value
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
    charts={charts}    
    errors={errors}
    onChange={handleChange}
    onSave={handleSave} 
     />
     ); 

}

ManageChartPage.propTypes = {
  currentPatient: PropTypes.object.isRequired,
  charts: PropTypes.array.isRequired,
  loadCharts: PropTypes.func.isRequired, 
  saveChart: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getPatientBySlug(patients, slug) {
  return (patients && patients.length > 0 && patients.find(patient => patient.slug === slug)) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  debugger; 
  const patient = getPatientBySlug(state.patients, slug);   
  return {
    currentPatient: patient,
    charts: state.charts,
  };
}

const  mapDispatchToProps = {
       loadCharts,
       saveChart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  ) (ManageChartPage);
