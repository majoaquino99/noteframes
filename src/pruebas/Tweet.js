import React from 'react';
import PropTypes from 'prop-types';

function Tweet({name, message}) {
  return (
    <div className='tweet'>
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>Number of Likes</h3>
    </div>
  );
}

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Tweet;