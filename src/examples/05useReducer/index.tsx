import {useReducer} from "react";
import styles from "./index.module.scss";
const initialState = {count: 0};
type ACTIONTYPE = {type: "increment" | "decrement"; payload: number};

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return {count: state.count + action.payload};
    case "decrement":
      return {count: state.count - action.payload};
    default:
      throw new Error();
  }
}

const UseReducerComp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button className={styles.btn} onClick={() => dispatch({type: "decrement", payload: 5})}>
        -
      </button>
      <span style={{width: "200px", display: "inline-block", textAlign: "center"}}>Count: {state.count}</span>
      <button className={styles.btn} onClick={() => dispatch({type: "increment", payload: 5})}>
        +
      </button>
    </>
  );
};

export default UseReducerComp;
