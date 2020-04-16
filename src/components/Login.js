import React, { useCallback, useContext } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import firebaseApp from '../firebase/firebaseConfig';
import { AuthContext } from '../firebase/Auth';
import * as firebase from 'firebase/app';

const Login = () => {
    const history = useHistory();
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
                alert(error);
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
                console.log(error);                
            }
        },
        [history, provider]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/home' />;
    }

    return (
        
        <div className='page'>
            <div className="container">
                <div className="left">
                    <h1 className='welcome'>Welcome to Note Frames</h1>
                    <h2 className="login">Login</h2>
                    <div className="eula">By logging in you agree to the ridiculously long terms that you wont bother to read</div>
                </div>
                <div className="right">      
                    <form action="#" method="post" onSubmit = {handleLogin} encType="multipart/form-data">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"/>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                        <button type="submit" id="submit" value="Submit">Submit</button>
                        <button onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with Google</button>
                        <p><Link to = '/signup'>Create an account</Link> </p>
                    </form>
        
                </div>
            </div>
        </div>
    );
};

export default Login;

