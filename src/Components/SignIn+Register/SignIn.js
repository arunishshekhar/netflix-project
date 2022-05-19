import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useUserAuth } from '../../Context/UserAuthContext';
import './SignIn.css'
import { useCookies } from 'react-cookie';

function SignIn() {
    const [cookie, setCookie] = useCookies(['cookie-name']);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { user, logIn } = useUserAuth();
    const history = useHistory();
    const [auth, changeAuth] = useState('false');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            setCookie('loggedUser', email);
            await setEmail('');
            await setPassword('');
            await changeAuth(true);
            setTimeout(() => {
                console.log(user);
                history.push('/browse/home');
            }, 700)
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
                    <form class='signIn-form' onSubmit={(e) => { handleSubmit(e) }}>
                        <h1>Sign In</h1>
                        <br />
                        {error ? <p style={{ 'background-color': 'rgb(230,61,58)', padding: '0.5rem', 'border-radius': '0.2rem' }}>{error}</p> : ''}
                        {auth == true ? <p style={{ 'background-color': 'green', padding: '0.5rem', 'border-radius': '0.2rem' }}>Log In Successful</p> : ''}
                        <br />
                        <input className='input-field' type="email" placeholder='Enter Email-Id' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                        <br />
                        <br />
                        <input className='input-field' type="password" placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                        <br />
                        <br />
                        <input className='submit-field' value={'Sign In'} type="submit"></input>
                    </form>
                    <br /><br />
                    <div className='signIn-form-footer'>
                        <p style={{ color: 'rgb(113,111,115)' }}>New To NetFlix? &nbsp;</p> <Link to='/signUp'><p className='signUp-hyperlink'>Sign Up Now</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn



