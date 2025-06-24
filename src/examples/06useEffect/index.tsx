import {useEffect, useState} from "react";
import styles from "./index.module.scss";

const UseEffectComp = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(10);
    }, 1000);
  }, []);
  return (
    <>
      <button className={styles.btn} onClick={() => setCount((count) => count - 1)}>
        -
      </button>
      <span style={{width: "200px", display: "inline-block", textAlign: "center"}}>Count: {count}</span>
      <button className={styles.btn} onClick={() => setCount((count) => count + 1)}>
        +
      </button>
    </>
  );
};

export default UseEffectComp;
