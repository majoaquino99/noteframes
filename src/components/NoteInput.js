import React, { useState } from 'react';
import firebaseApp from '../firebase/firebaseConfig';
import PropTypes from 'prop-types';

const NoteInput = ({ note }) => {
    const [name, setName] = useState(note.name);

    const editNote = () => {
        const database = firebaseApp.firestore();
        database.collection('notes').doc(note.id).set({...note, 
            name});
    };

    const deleteNote = () => {
        const database = firebaseApp.firestore();
        database.collection('notes').doc(note.id).delete();
    };
    // add a form to below to substitute the onclick button to enter

    return (
        <>
            <input
                value = {name}
                onChange={event => {
                    setName(event.target.value);
                }}
            />
            <button onClick={editNote}>Edit</button>
            <button onClick={deleteNote}>Delete</button>

        </>
    );
};

NoteInput.propTypes = {
    note: PropTypes.object.isRequired,
};

export default NoteInput;