import React from "react";
//this hook helps us to use redux store state 
//in any component
import {useSelector} from 'react-redux';
//importing dispatch to pass actions to reducers
import {useDispatch} from 'react-redux';
//importing actions
import {increment,decrement} from './actions';

function App() {
  const counter =useSelector(state=> state.counter);
  const isLogged =useSelector(state=> state.isLogged);
  const dispatchEvent=useDispatch();
  //we can als do:
  //const counter =useSelector(state=> state)
  return( 
  <div className="App">
  <h1>Testing redux</h1>
  <h2>Counter {counter}</h2>
  <button onClick={()=>dispatchEvent(increment())}>+</button>
  <button  onClick={()=>dispatchEvent(decrement())}>-</button>
  {isLogged?<h2>Info that I shouldn't see</h2>:''}
  </div>
  )
}

export default App;
