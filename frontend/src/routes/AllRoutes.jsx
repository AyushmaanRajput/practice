import React from 'react';
import { Routes,Route, Router} from 'react-router-dom';
import { Signup} from '../pages/auth/Signup';
import { Login} from '../pages/auth/Login';
import { Home} from '../pages/home/Home';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
    </Routes>
  )
}

export default AllRoutes
