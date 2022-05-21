// import React, { Component } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import { Notfould } from './pages/Notfould';
import Signin from './pages/Signin';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ Item }) => {
    const { signed } = isAuthenticated();

    return signed > 0 ? <Item /> : <Signin />;
};

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<PrivateRoute Item={ Home } />} />
            <Route exact path="/signin" element={<Signin />} />
            <Route exact path="/signout" element={<Signin />} />
            <Route path="*" element={<Notfould />} />
        </Routes>
    </BrowserRouter>
);

export default Router;