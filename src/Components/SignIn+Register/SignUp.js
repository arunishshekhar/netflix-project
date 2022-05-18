import React, { useState } from 'react'
import { useUserAuth } from '../../Context/UserAuthContext';
import './SignIn.css'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function SignUp() {
    
    const [name, setName] = useState('');
    const { user, signUp, signUpEmail, setSignUpEmail } = useUserAuth();
    const [email, setEmail] = useState(signUpEmail);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [auth, changeAuth] = useState('false');
    const history = useHistory();
    const [cookie, setCookie] = useCookies(['cookie-name']);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signUp(email, password);
            // user['displayName'] = name;
            setCookie(`${email}`,`${name}`);
            await setEmail('');
            await setPassword('');
            await changeAuth(true);
            setTimeout(() => {
                history.push('/login');
            }, 700);
        }
        catch (err) {
            setError(err.message)
        }
        return null;
    }
    return (

        <div className='signInPage'>
            <div className='signInPage-wrapper'>
                <div className='loginPage-logo'>
                    <Link to='/'><img className="logo" src="/Images/logo.svg" alt="logo" /></Link>
                </div>
                <div className='signIn-container'>
                    <form class='signIn-form' onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <br />
                        {error ? <p style={{ 'background-color': 'rgb(230,61,58)', padding: '0.5rem', 'border-radius': '0.2rem' }}>{error}</p> : ''}
                        {auth == true ? <p style={{ 'background-color': 'green', padding: '0.5rem', 'border-radius': '0.2rem' }}>User Registered!</p> : ''}
                        <br />
                        <input className='input-field' type="text" placeholder='Enter Name' value={name} required onChange={(e) => { setName(e.target.value) }}></input>
                        <br />
                        <br />
                        <input className='input-field' type="email" placeholder='Enter Email-Id' value={email} onChange={(e) => { setSignUpEmail(''); setEmail(e.target.value); }}></input>
                        <br />
                        <br />
                        <input className='input-field' type="password" placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                        <br />
                        <br />
                        <input className='submit-field' type="submit" value={'Register User'}></input>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default SignUp



