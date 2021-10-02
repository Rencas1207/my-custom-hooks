// import { useState } from 'react';

// export const useCounter = (initialState = 10) => {
//   const [state, setstate] = useState(initialState); // 10

//   const increment = (factor = 1) => {
//     setstate(state + factor);
//   };

//   const decrement = (factor = 1) => {
//     setstate(state - factor);
//   };

//   const reset = () => {
//     setstate(initialState);
//   };

//   return {
//     state,
//     increment,
//     decrement,
//     reset,
//   };
// };

// PARA EFECTOS DEL USE FETCH
import { useState } from 'react';

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState); // 10

  const increment = () => {
    if (counter === 30) {
      setCounter(63);
      return counter;
    }

    if (counter === 102) {
      setCounter(1);
      return counter;
    }

    setCounter((counter) => counter + 1);
  };

  const decrement = () => {
    if (counter === 1) {
      setCounter(102);
      return counter;
    }

    if (counter === 63) {
      setCounter(30);
      return counter;
    }

    setCounter((counter) => counter - 1);
  };

  const reset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
