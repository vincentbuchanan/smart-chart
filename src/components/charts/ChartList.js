import React from "react";
import PropTypes from "prop-types";



const ChartList = ({ charts }) => (
    <table className="table" style="width:30%">
    <thead>
      <tr>
        <th>Created</th>
        <th>Duration</th>        
      </tr>
    </thead>
    <tbody>
    {charts.map(chart => {
        return (
          <tr key={chart.id}>
            <td>{chart.dateCreated}</td>              
            <td>{chart.duration}</td>                        
          </tr>
        );
      })};    

    </tbody>
  </table>
);

ChartList.propTypes = {
    charts: PropTypes.array.isRequired
  };
  
  export default ChartList;
  