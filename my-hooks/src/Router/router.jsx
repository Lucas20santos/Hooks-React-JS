import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard';
import Preferences from '../components/preferences';


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = { Login } exact path="/" />
                <Route element = { Dashboard } path="/dashboard" />
                <Route element = { Preferences } path="/preferences" />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
