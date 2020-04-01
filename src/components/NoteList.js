import React from 'react';
import PropTypes from 'prop-types';

function NoteList({note, children}) {
	return (
		<div className='note'>
			<p>{note}</p>
			{children}
		</div>
	);
}

NoteList.propTypes = {
	note: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default NoteList;