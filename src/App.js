/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { 
    BrowserRouter as Router,  
    Route,
    Switch,
} from 'react-router-dom';

import { AuthProvider } from './firebase/Auth';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './components/Unauthorized/Unauthorized';
import Notestore from './components/Notestore';


/* const LogOut = () => {
    useEffect(() => {
        firebaseApp.auth().signOut();
    }, []);
    return <Redirect to = {'/'} />;
}; */


function App() {	
    return (				
        <div className ='app'>
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route exact path = '/' component= {Login} /> 
                        <Route exact path = '/signup' component= {Signup}/>
                        <ProtectedRoute 
                            exact path = "/home" 
                            component = {Notestore} 
                        />	
                        <Route exact path = '/unauthorized' component = {Unauthorized} />									
                    </Switch>
                </Router>
            </AuthProvider>           
        </div> 		   
    );
}


export default App;


