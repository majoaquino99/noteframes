import React from 'react';
// import NotesInterface from './components/NotesInterface';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
	return (				
		<div className='app'>
			<Router>
				<Switch>
					<Route exact path = "/" component = {Login}/>					
					{/* <Route path = "/Home" component = {NotesInterface} />	 */}											
				</Switch>
			</Router>
			
			
		</div> 		   
	);
}


export default App;


