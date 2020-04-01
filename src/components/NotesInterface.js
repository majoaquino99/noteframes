import React, {useState} from 'react';
import AddNote from './AddNote';
import NoteList from './NoteList';


const NotesInterface = () => {
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
		<div className='grid'>
			<AddNote eventAddNotes={addNote}/>   
			{notes.map(note => (
				<NoteList 
					key={note} 
					note={note}
				> 
					<div className='btns'>
						<button 
							className='btn' 
							onClick={() => deleteNote(note)}>
          Delete
						</button>
						<button 
							className='btn'>
          Edit
						</button>   
					</div>         
				</NoteList>
			))}
		</div>
	);
};

export default NotesInterface;

/* <ul>
        {notes.map(n => {
          return (
            <li key={n}>
              {n}
              <button onClick={() => deleteNote(n)}>X</button>
            </li>
          );
        })}
      </ul> */

