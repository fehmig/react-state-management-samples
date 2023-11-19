import React, { useReducer } from 'react'
import '../../App.css';
import TodosReducer from '../reducers/TodosReducer';

const UseReducerSample = () => {

    const [state, dispatch] = useReducer(TodosReducer,{
        todos: [],
        todo: ''
    })

    const submitHandle = e =>{
        e.preventDefault()
       dispatch({
        type:'ADD_TODO',
        todo: state.todo
       })
    }

    const onChange = e => {
        dispatch({
            type:'SET_TODO',
            value:e.target.value
        })
    }

  return (
    <div>
       <div className="App">
     <h1>REDUCER SAMPLES</h1>
     <h3>Todo App</h3>
     <form onSubmit={submitHandle}>
        <input type='text'  value={state.todo} onChange={onChange}/>
        <button disabled={!state.todo} type='submit'>Ekle</button>

     </form>
     
     <ul>
            {state.todos.map((todo,index) => (
                <li key={index}>
                    {todo}
                </li>
            ))}
        </ul>
    </div>
    </div>
  )
}

export default UseReducerSample
