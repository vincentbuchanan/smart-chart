import React from "react";
import PropTypes from "prop-types";
import PatientHeader from "../patients/PatientHeader";
import ChartList from "./ChartList";
//import { charts } from "../../../tools/mockData";



const ChartForm = ({ 
  charts, 
  patient
 }) => {     
  return (      
    <div>
      <PatientHeader patient={patient}></PatientHeader>  
      <ChartList charts={charts}></ChartList>          
    </div>  
  );
}

ChartForm.propTypes = {
  charts: PropTypes.array.isRequired
};



export default ChartForm;