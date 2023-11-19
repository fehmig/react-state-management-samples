import React from 'react'
import { useCounter } from './UseReducerSample2'

function Result() {
    const {state} = useCounter()
  return (
    <p>Count: {state.count}</p>
  )
}

export default Result
