import React from 'react';
import PropTypes from 'prop-types';

import NewNote from './NewNote';
import Portal from './Portal';
import ToggleContent from './Toggle';


const AddNote = ({eventAddNotes}) => {
    return (
        <div>
            <ToggleContent  
                content={hide => (
                    <Portal>
                        <button className='btn'
                            onClick={hide}>
                X
                        </button>
                        <NewNote addNote={eventAddNotes} />         
                    </Portal>
                )}
            />     
        </div>    
    );
};

AddNote.propTypes = {
    eventAddNotes: PropTypes.func.isRequired,
};

export default AddNote; 