import React, { useCallback, useContext, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import firebaseApp from '../firebase/firebaseConfig';
import { UserContext } from '../firebase/Auth';
import * as firebase from 'firebase/app';

const Login = () => {
    const history = useHistory();
    const [error, setErrors] = useState('');
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebaseApp
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } catch (error) {
                setErrors(error.message);
            }
        },
        [history]
    );
    const provider = new firebase.auth.GoogleAuthProvider();

    const signInWithGoogle = useCallback(
        async event => {
            event.preventDefault();
            try {
                firebase
                    .auth()
                    .signInWithPopup(provider);
                history.push('/');
            } catch (error) {
                setErrors(error.message);              
            }
        },
        [history, provider]
    );

    const { currentUser } = useContext(UserContext);

    if (currentUser) {
        return <Redirect to='/home' />;
    }

    return (   
        <div className="login" id="container">
            <div className="panel">
                <div className="row">
                    <div className="col liquid">
                        <h4>Note Frames</h4>
                        <h2>LOGIN</h2>
                    </div>
                    <div className="col login">
                        <button type='button' className=' btn btn-signup'><Link to = '/signup'>Sign Up</Link></button>
                        <button type='button' className=' btn btn-signup' onClick={signInWithGoogle}>Google</button>
                        <form onSubmit = {handleLogin}>
                            <div className='form-group'>
                                <input className="form-input" id='email' type="email" placeholder="Email" required="required"/>
                            </div>
                            <div className="form-group">
                                <input className="form-input" id='password' type="password" placeholder="Password" required='required'/>
                            </div>
                            <div className='form-group'> 
                                <span>{error}</span>
                            </div>   
                            <button type="submit" value='submit' className="btn btn-login">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;



