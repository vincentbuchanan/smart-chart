import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PatientList = ({ patients }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Add Chart</th>
        <th>Patient Name</th>
        <th>Patient Reference</th>
        <th>Patient SSN</th>
        <th>Next Appointment</th>
      </tr>
    </thead>
    <tbody>
      {patients.map(patient => {
        return (
          <tr key={patient.patientRef}>
            <td>
              <a
                className="btn btn-primary"
                href={"/patient/" + patient.slug}
              >Edit
              </a>
            </td>
            <td>
              <Link to={"/chart/" + patient.slug}>{patient.lastName + ", " + patient.firstName + " " + patient.middleName}</Link>
            </td>
            <td>{patient.patientRef}</td>
            <td>{patient.ssn}</td> 
            <td>{patient.nextAppt}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

PatientList.propTypes = {
  patients: PropTypes.array.isRequired
};

export default PatientList;
