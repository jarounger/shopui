import React from 'react';

export default function useCounter() {
  const [counter, setCounter] = React.useState(1);
  const increment = () => setCounter(counter + 1);

  return { counter, increment };
}