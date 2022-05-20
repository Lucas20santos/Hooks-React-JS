import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from '../pages/Home';
import Signin  from "../pages/Signin";
import Signup from "../pages/Signup";

import useAuth from "../hooks/useAuth";
import Environments from "../pages/Environments";

const Private = ({ Item }) => {

    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />;
}

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/home" element={<Private Item={ Environments } />} />
                    <Route path="/" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element= {<Signin />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RouterApp;
