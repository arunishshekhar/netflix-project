import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useUserAuth } from '../../Context/UserAuthContext';
import './SignIn.css'

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { signUp, logIn } = useUserAuth();
    const navigate = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password)
        }
        catch (err) {
            setError(err.message)
        }
        return null;
    }
    return (
        <div className='signInPage'>
            <img className="logo" src="/Images/logo.svg" alt="logo" />
            <div className='signIn-container'>
                <form class='signIn-form' onSubmit={ (e) => { handleSubmit(e); navigate.push('/'); }}>
                    <h1>Sign In</h1>
                    <br />
                    {error ? <p>{error}</p> : ''}
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
    )
}

export default SignIn



