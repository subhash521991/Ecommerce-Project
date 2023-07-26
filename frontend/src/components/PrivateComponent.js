import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const PrivateComponent = () => {
    //const Navigate = useNavigate();
const auth = localStorage.getItem('user');

  return auth?<Outlet />:<Navigate to="/signup" replace/>
  
}

export default PrivateComponent; 
