import React, {useState} from 'react';

const IncrementValue = () => {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className='app'>
      <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>     
    </div>
  );
};

export default IncrementValue;

/* 
  // import Tweet from './Tweet';
  <Tweet name="Notes" message="This is a random tweet" />
  <Tweet name="React" message="React is a library made by facebook"/>
  <Tweet name="Laboratoria" message="Bootcamp to start a career in programming"/>
  <Tweet name="Things to Do" message="Send message to Lila"/>
  <Tweet name="Quotes" message="Be still"/> */

