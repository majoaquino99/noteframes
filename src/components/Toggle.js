import React, {useState} from 'react';
import PropTypes from 'prop-types';

const ToggleContent = ({ toggle, content }) => {

  const [isShown, setIsShown] = useState(false); // By calling useState(initialValue), we tell React to create a state value

  const hide = () => setIsShown(false);// We pre-define the show and hide functions to set our state to true or false.
  const show = () => setIsShown(true);

  // <> </> to return more than two things
  // Toggle prop is rendering the button that opens our modal. The content prop is the actual modal 
  return (
    <> 
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};
ToggleContent.propTypes = {
  toggle: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
};


export default ToggleContent;