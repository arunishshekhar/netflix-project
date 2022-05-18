import React from 'react'
import { useUserAuth } from '../Context/UserAuthContext'
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';


function ProtectedRoute({ children }) {
    const [cookies, removeCookie] = useCookies(['cookie-name']);
    let { user } = useUserAuth();
    let history = useHistory();
    if (user || (cookies['loggedUser'] && cookies['loggedUser'] != 'undefined'))
        return children;
    return history.push('/');
}

export default ProtectedRoute