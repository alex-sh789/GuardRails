import React from "react";
import { Switch, Route } from 'react-router-dom'
import CreateReportPage from "../pages/CreateReportPage";
import ReportsListPage from "../pages/ReportsListPage";
import ReportPage from "../pages/ReportPage";


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={CreateReportPage}/>
            <Route path='/reports' component={ReportsListPage}/>
            <Route path='/report/:id' component={ReportPage}/>
        </Switch>
    </main>
);
export default Main