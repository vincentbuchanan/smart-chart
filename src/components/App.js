import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import PatientsPage from "./patients/PatientsPage";
import ManagePatientPage from "./patients/ManagePatientPage";
import ManageChartPage from "./charts/ManageChartPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/patients" component={PatientsPage} />
        <Route path="/patient/:slug" component={ManagePatientPage} />                
        <Route path="/chart/:slug" component={ManageChartPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
