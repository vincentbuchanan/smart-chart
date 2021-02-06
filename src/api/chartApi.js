import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/charts/";


export function getCharts() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}


export function saveChart(chart) {
  return fetch(baseUrl +(chart.id), {
    method: chart.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(chart)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteChart(chartId) {
  return fetch(baseUrl + chartId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
