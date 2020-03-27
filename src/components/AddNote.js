import React from 'react';
import ToggleContent from './Toggle';
import Modal from './Modal';
import Notes from './Notes';

const AddNote = () => {
  return (
    <div>
      <ToggleContent 
        toggle={show =>
          <button 
            onClick={show} 
            className='addNewNote'>Add Note
          </button>}
        content={hide => (
          <Modal>
            <button
              onClick={hide}>
                X
            </button>
            <Notes/>
          </Modal>
        )}
      />     
    </div>    
  );
};

export default AddNote; 