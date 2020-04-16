import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import firebaseApp from '../firebase/firebaseConfig';
import { Link } from 'react-router-dom';

const Signup = ({ history }) => {
    const handleSignup = useCallback(async event => {
        event.preventDefault();

        const { email, password } = event.target.elements;
        try {
            await firebaseApp
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (error) {
            alert(error); // change error handling
        }
    }, [history]);

    return (    
        <div className="signup-cont content">
            <h2>Sign up</h2>
            <form onSubmit= {handleSignup} action="#" method="post" encType="multipart/form-data">
                <input type="email" name="email" id="email" className="inpt" required="required" placeholder="Your email"/>
                <label htmlFor="email">Your email</label>
                <input type="password" name="password" id="password" className="inpt" required="required" placeholder="Your password"/>
                <label htmlFor="password">Your password</label>
                <div className="submit-wrap">
                    <input type="submit" value="Sign up" className="submit"/>
                </div>
                <p><Link to = '/'> Already have an account?</Link> </p>
            </form>
        </div>    
    );
};

export default withRouter(Signup);