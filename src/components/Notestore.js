import React, { useState, useEffect, useContext } from 'react';
import firebaseApp from '../firebase/firebaseConfig';
import NoteInput from './NoteInput';
import Navbar from './Navbar';
import NoteList from './NoteList';
import UserContext from '../firebase/Auth';
import { Redirect } from 'react-router-dom';


const Notestore = () => {
    const [notes, setNotes] = useState([]); 
    const [newNote, setNewNote] = useState('');

    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        const database = firebaseApp.firestore(); // obtengo un objeto de la base de datos
        if (currentUser) {
            const unsubscribe = database.collection('notes').where('userId', '==', currentUser.uid).onSnapshot((snapshot) => {
                const notesData = [];
                snapshot.forEach(doc => notesData.push(({...doc.data(), 
                    id: doc.id})));
                setNotes(notesData);
            });
            return unsubscribe; 
        } else {
            return <Redirect to='/' />;
        }       
    }, [currentUser]);

    const createNote = () => {
        const database = firebaseApp.firestore();
        const { currentUser } = firebaseApp.auth();
        if (!currentUser) {
            throw new Error('No hay usuarix loggeadx');
        }
        database.collection('notes').add({name: newNote, 
            userId: currentUser.uid });
    };
    return (
        <div>
            <Navbar/>
            <div className='grid'>
                <form
                    onSubmit={error => {
                        error.preventDefault();
                        createNote(newNote);
                        setNewNote('');
                    }}>
                    <input
                        className= 'newNote'
                        onChange={(event) => 
                            setNewNote(event.target.value)}
                        placeholder='Add New Note'
                        type='text'
                        value={newNote}
                    />
                </form>
                {notes.map(note => (
                    <NoteList
                        key={note.id}
                    >
                        <NoteInput note={note} />
                    </NoteList>
                ))}
              
            </div>
        </div>

    );
};


export default Notestore;

/* const fetchData = async() => {
    // const data = await database.collection('notes').get();
    // setNotes(data.docs.map(doc => ({...doc.data(), id: doc.id})));
      
    fetchData();
}; */