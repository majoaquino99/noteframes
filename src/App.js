/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect } from 'react';
import { 
    BrowserRouter as Router,  
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import NotesInterface from './components/NotesInterface';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './components/Unauthorized/Unauthorized';
import { AuthProvider } from './firebase/Auth';
import Login from './components/Login';
import Signup from './components/Signup';
import firebaseApp from './firebase/firebaseConfig';

const LogOut = () => {
    useEffect(() => {
        firebaseApp.auth().signOut();
    }, []);
    return <Redirect to = {'/'} />;
};


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
                            component = {NotesInterface} 
                        />	
                        <Route exact path = '/unauthorized' component = {Unauthorized} />			
                        <Route exact path= "/auth/logout" component={LogOut} />							
                    </Switch>
                </Router>
            </AuthProvider>           
        </div> 		   
    );
}


export default App;


