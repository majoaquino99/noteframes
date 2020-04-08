/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
// import Login from './components/Login';
import { 
    BrowserRouter as Router,  
    Route,
    Switch,
} from 'react-router-dom';
import NotesInterface from './components/NotesInterface';
import Landing from './components/Landing';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './components/Unauthorized/Unauthorized';


function App() {
    const [user, setUser] = useState(false);

    const handleLogin = error => {
        error.preventDefault();
        setUser(true);
    };
	
    const handleLogout = error => {
        error.preventDefault();
        setUser(false);
    };
	
    return (				
        <div className='app'>
            <Router>
                <Switch>
                    <Route exact path = "/" 
						   handleLogin = {handleLogin}
						   render = {props =>
						    <Landing {...props} 
                                user= {user.toString()} 
                                handleLogin = {handleLogin} /> }
						   />					
                    <ProtectedRoute 
                        exact path = "/home" 
                        component = {NotesInterface} 
                        handleLogout = {handleLogout}
                        user={user}
					 />	
					 <Route exact path= '/unauthorized' component = {Unauthorized} />											
                </Switch>
            </Router>
			
			
        </div> 		   
    );
}


export default App;


