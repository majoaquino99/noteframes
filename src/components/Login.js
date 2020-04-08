/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseApp from '../firebaseConfig';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;
      
        return (
            <div>
                {
                    user
                        ? <p>Hello, {user}</p>
                        : <div>
						     <p>Please sign in.</p>
						     <p><Link to='/home'>View Notes</Link></p>
						  </div>
                }
  
                {
                    user
                        ? <button onClick={signOut}>Sign out</button>
                        : <button onClick={signInWithGoogle}>Sign in with Google</button>
                }
            </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};


export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);

