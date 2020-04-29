import React from 'react';
import PropTypes from 'prop-types';

function NoteList({children}) {
    return (
        <div className='note'>
            {children}
        </div>
    );
}

NoteList.propTypes = {
    children: PropTypes.node.isRequired,
};

export default NoteList;