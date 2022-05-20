import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';


function ProtectedRoute({ children }) {
    const [cookie, removeCookie] = useCookies(['cookie-name']);
    let history = useHistory();
    if (!cookie['loggedUser'] || cookie['loggedUser'] == 'undefined')
        return history.push('/');
    return children;
}

export default ProtectedRoute