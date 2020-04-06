import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseApp from '../firebaseConfig';
import NotesInterface from './NotesInterface';

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
						? <div>
						    <p>Hello, {user.displayName}</p>
						    <NotesInterface/>
						  </div>
						: <p>Please sign in.</p>
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

