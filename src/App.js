import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import TopMenu from './components/TopMenu';
import HomePage from './pages/Home';
import CavitiesPage from './pages/Cavities';
import AppointmentsPage from './pages/Appointments';
import WhiteningPage from './pages/Whitening';
import './App.css';

function App() {
    return (
        <Router>
            <TopMenu/>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route exact path='/gaatjes'>
                    <CavitiesPage/>
                </Route>
                <Route exact path='/afspraken'>
                    <AppointmentsPage/>
                </Route>
                <Route exact path='/bleken'>
                    <WhiteningPage/>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
