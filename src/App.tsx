import React from 'react';
import Login from "./components/login/Login";
import Password from "./components/password/Password";
import ErrorPage from "./components/error/ErrorPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/password' element={<Password/>}/>
                    <Route path='/error' element={<ErrorPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;