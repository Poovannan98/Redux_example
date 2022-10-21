import './App.css';
import { Counter } from './Counter';


export const  initialState = {count:1000, color: "red"};


export const reducer = (state, action) => {
    switch(action.type){
      case "increment":
        return { ...state, count: state.count +  1};
      case "decrement":
        return { ...state, count: state.count -  1};
      case "reset":
        return { ...state, count: action.payload};
      case "color":
        return { ...state, color: action.payload };
      default:
        return state;
    }
}

function App() {
  return <>
  <Counter/>
  </>
}

export default App;
