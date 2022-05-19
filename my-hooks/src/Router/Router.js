import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard';
import Preferences from '../components/Preferences';


export default function Router()
{
    return(
    <BrowserRouter>
        <Routes>
            <Route element = { Login } exact path="/" />
            <Route element = { Dashboard } exact path="/dashboard" />
            <Route element = { Preferences } exact path="/preferences" />
        </Routes>
    </BrowserRouter>
    )
}
