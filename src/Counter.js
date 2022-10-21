import { useReducer } from "react";
import { reducer, initialState } from './App';

export function Counter() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const styles = {
    background: state.color
  };
  return <>
    <button onClick={() => dispatch({ type: "decrement" })}>➖</button> Count: {state.count}{" "}
    <button onClick={() => dispatch({ type: "increment" })}>➕</button>
    &nbsp;
    <button onClick={() => dispatch({ type: "reset", payload: 0 })}>Reset 0</button>
    &nbsp;
    <button onClick={() => dispatch({ type: "reset", payload: 10 })}>Reset 10 </button>
    &nbsp;
    <input
      style={styles}
      onChange={(e) => dispatch({ type: "color", payload: e.target.value })} />
  </>;
}
