import React from "react";

const PatientCount = (state = { data :{ patients: 100, charts: 100}}) => (
    <div>
      <h2>Patients: {state.data.patients} Charts: {state.data.charts}</h2>
    </div>
  );
  
  export default PatientCount;