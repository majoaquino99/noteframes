import React, {useState} from 'react';
import PropTypes from 'prop-types';

const NewNote = ({ addNote }) => {
    const [value, setValue] = useState('');
    return (
        <form
            onSubmit={error => {
                error.preventDefault();
                addNote(value);
                setValue('');
            }}
        >
            <input
                className= 'newNote'
                onChange={error => {
                    setValue(error.target.value);
                }}
                placeholder='Add Note'
                type="text"
                value={value}
            />
        </form>
    );
};
NewNote.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default NewNote;