import React from 'react';
import NotesInterface from './components/NotesInterface';
import Navbar from './components/Navbar';


function App() {
	return (
		<div className='app'>
			<Navbar/>
			<div id="modal-root">			
				<NotesInterface/>	
			</div>
			
		</div>    
	);
}


export default App;

