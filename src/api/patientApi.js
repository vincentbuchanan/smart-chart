import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/patients/";


export function getPatients() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}



export function savePatient(patient) {
  return fetch(baseUrl + (patient.id || ""), {
    method: patient.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(patient)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(patientId) {
  return fetch(baseUrl + patientId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}



