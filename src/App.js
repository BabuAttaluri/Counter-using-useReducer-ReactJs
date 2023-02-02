import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

function App() {
  const initialCounterState = {
    count: 0
  }
  // const [age, setAge] = useState(0);
  const [taskState, dispatch] = useReducer(counterReducer, initialCounterState);

  function counterReducer(state, action) {
    switch(action.type) {
      case 'add':
         return {
           ...state,
           count: state.count + 1
         }
      case 'delete':     
        return {
           ...state,
           count: state.count - 1
        }
        case 'deleteAll': 
        return {
           ...state,
           count: 0
        }
      default:
        return state
    }
  }  

  return (
    <div className="App">
       <h2>Task Counter</h2>
      <button onClick={() => dispatch({type: 'add'})} id="addTaskBtn">Add a task</button>
      <button onClick={() => dispatch({type: 'delete'})}  id="delTaskBtn">Delete a task</button>
      <button onClick={() => dispatch({type: 'deleteAll'})}  id="delAllTaskBtn">Delete all tasks</button>
      <h3 className="counter">Number of Tasks : {taskState.count}</h3>

    </div>
  );
}

export default App;