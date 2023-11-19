import { createContext, useReducer } from 'react';
import React from 'react'
import counterReducer from '../reducers/CounterReducer';
import '../../App.css';
import Result from './Result';
import { useContext } from 'react';


export const UseReducerSample2CounterContext = createContext()

export const useCounter = () => {
  return useContext(UseReducerSample2CounterContext);
};

function UseReducerSample2() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    const value = {
      state:state,
      dispatch:dispatch
    }

    return (

    <UseReducerSample2CounterContext.Provider value={value}>
      <div className='App'>
      <Result />
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Arttır</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Azalt</button>
      </div>
      </UseReducerSample2CounterContext.Provider>
    );
}

export default UseReducerSample2
