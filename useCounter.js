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
  const [state, setstate] = useState(initialState); // 10

  const increment = () => {
    if (state === 30) {
      setstate(63);
      return state;
    }

    if (state === 102) {
      setstate(1);
      return state;
    }

    setstate((state) => state + 1);
  };

  const decrement = () => {
    if (state === 1) {
      setstate(102);
      return state;
    }

    if (state === 63) {
      setstate(30);
      return state;
    }

    setstate((state) => state - 1);
  };

  const reset = () => {
    setstate(initialState);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
};
