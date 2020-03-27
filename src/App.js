import React from 'react';
import AddNote from './components/AddNote';


function App() {
  return (
    <div className='app'>
      <header>
        <h1>My Notes</h1>
      </header>
      <div id="modal-root"></div> 
      <AddNote/>   
    </div>    
  );
}


export default App;

