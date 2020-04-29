import React, { useCallback, useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import firebaseApp from '../firebase/firebaseConfig';
import { Link } from 'react-router-dom';

const Signup = () => {
    const history = useHistory();
    const [error, setErrors] = useState('');
    const handleSignup = useCallback(async event => {
        event.preventDefault();

        const { email, password } = event.target.elements;
        try {
            await firebaseApp
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (error) {
            setErrors(error.message); // change error handling
        }
    }, [history]);

    return (    
        <div className="signup-cont content">
            <h2>Sign up</h2>
            <form onSubmit= {handleSignup} action="#" method="post" encType="multipart/form-data">
                <label htmlFor="email">Your email</label>
                <input type="email" name="email" id="email" className="inpt" required="required" placeholder="Your email"/>                
                <label htmlFor="password">Your password</label>
                <input type="password" name="password" id="password" className="inpt" required="required" placeholder="Your password"/>                
                <div className='form-group'> 
                    <span>{error}</span>
                </div>  
                <div className="submit-wrap">
                    <input type="submit" value="Sign up" className="submit"/>
                </div>
                <p><Link to = '/'> Already have an account?</Link> </p>
            </form>
        </div>    
    );
};

export default withRouter(Signup);