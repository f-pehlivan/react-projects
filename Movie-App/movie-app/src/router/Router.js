import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Main from '../pages/Main';
import Navbar from '../components/Navbar';


const AppRouter = () => {

    return (
        <Router>
        <Routes>

            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>

        </Routes>

        </Router>
    )
}

export default AppRouter;