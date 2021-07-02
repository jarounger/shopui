import { useState } from 'react';

export default function useCounter() {
  const [counter, setCounter] = useState(1);
  return [counter, setCounter];
}