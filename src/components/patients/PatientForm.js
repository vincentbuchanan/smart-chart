import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";



const PatientForm = ({
  patient,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  console.log("from PatientForm");
  let sexes = [{ key:'M', text: "Male"}, { key: 'F', text:'Female'}];
  return (
    <form onSubmit={onSave}>
      <h2>{patient.id ? "Edit" : "Add"} Patient</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="firstName"
        label="First Name"
        value={patient.firstName}
        onChange={onChange}
        error={errors.firstName}
      />
      <TextInput
        name="middleName"
        label="Middle Name"
        value={patient.middleName}
        onChange={onChange}
        error={errors.firstName}
      />
      <TextInput
        name="lastName"
        label="Last Name"
        value={patient.lastName}
        onChange={onChange}
        error={errors.firstName}
      />
      <SelectInput
        name="sex"
        label="Sex"
        value={patient.sex || ""}
        defaultOption="Select Male or Female"
        options={sexes.map(sex => ({
          value: sex.key,
          text: sex.text
        }))}
        onChange={onChange}
        error={errors.patientSex}
      />
      <TextInput
        name="ssn"
        label="SSN"
        value={patient.ssn}
        onChange={onChange}
        error={errors.patientSsn}
      />
      <TextInput
        name="patientRef"
        label="Patient Reference Number"
        value={patient.patientRef}
        onChange={onChange}
        error={errors.patientSsn}
      />
      <TextInput
        name="address"
        label="Address"
        value={patient.address}
        onChange={onChange}
        error={errors.patientSsn}
      />
      <TextInput
        name="city"
        label="City"
        value={patient.city}
        onChange={onChange}
        error={errors.patientSsn}
      />
      <TextInput
        name="state"
        label="State"
        value={patient.state}
        onChange={onChange}
        error={errors.patientSsn}
      />
      <TextInput
        name="carePlan"
        label="Care Plan"
        value={patient.carePlan}
        onChange={onChange}
        error={errors.patientSsn}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

PatientForm.propTypes = {  
  patient: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default PatientForm;
