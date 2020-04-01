import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const Portal = ({ children }) => (
	ReactDOM.createPortal(
		<div className='modal'>
			{children}
		</div>,
		document.getElementById('modal-root')
	)
);

Portal.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Portal;