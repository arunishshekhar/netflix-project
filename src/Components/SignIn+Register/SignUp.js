import React, { useState } from 'react'
import { useUserAuth } from '../../Context/UserAuthContext';
import './SignIn.css'

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signUp } = useUserAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signUp(email, password)
        }
        catch (err) {
            setError(err.message)
        }
        return null;
    }
    return (
        
        <div className='signInPage'>
            <div className='signIn-container'>

                <form class='signIn-form' onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <br />
                    {error ? <p>{error}</p> : ''}
                    <br />
                    <input className='input-field' type="email" placeholder='Enter Email-Id' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    <br />
                    <br />
                    <input className='input-field' type="password" placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                    <br />
                    <br />
                    <input className='submit-field' type="submit" value={'Register User'}></input>
                </form>

            </div>
        </div>
    )
}

export default SignUp



