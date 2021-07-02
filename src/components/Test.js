// from https://reactjs.org/docs/hooks-effect.html

// https://dev.to/spukas/react-hooks-creating-custom-state-hook-300c

import React, { useState, useEffect } from 'react';

function useCounter(intialCount = 0){
  const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  
  return [count, setCount];
}

function Example() {
  // Call custom hook `useCounter` to reuse Counter logic
  const [count, setCount] = useCounter(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}