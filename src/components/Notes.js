import React, { useState } from 'react';
import NewNote from './NewNote';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const addNote = note => {
    const array = [...notes];
    array.push(note);
    setNotes(array);
  };
  const deleteNote = note => {
    const array = notes.filter(n => n !== note);
    setNotes(array);
  };
  return (
    <div className="noteTable">
      <NewNote addNote={addNote} />
      <ul>
        {notes.map(n => {
          return (
            <li key={n}>
              {n}
              <button onClick={() => deleteNote(n)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Notes;