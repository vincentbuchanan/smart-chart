import React from "react";
import PropTypes from "prop-types";


const PatientHeader = ({patient}) => {    
    return (   
    <div className="container p-3 my-3 bg-primary text-white">
        <div>{patient.lastName}, {patient.firstName} {patient.middleName}</div>
        <div>Patient Ref: {patient.patientRef}</div>
        <div>SSN: {patient.ssn}</div>
        <div>Address: {patient.address} <span>City: {patient.city}</span>, State: {patient.state}</div>
        <br/>
        <div>Last Appointment: {patient.lastSeen}</div>
        <div>Next Appointment: {patient.nextAppt}</div>
    </div>        
    );
}

PatientHeader.propTypes = {
    patient: PropTypes.object.isRequired
}  

export default PatientHeader;