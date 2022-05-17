import React from 'react'
import { useUserAuth } from '../Context/UserAuthContext'
import { useHistory } from 'react-router-dom';

function ProtectedRoute({ children }) {
    let { user } = useUserAuth();
    let history = useHistory();
    if (!user)
        return history.push('/');
    return children;
}

export default ProtectedRoute