import {useState} from "react";
import styles from "./index.module.scss";
const UseStateComp = () => {
  const [count, setCount] = useState(0);
  const onClickBtn = () => {
    setCount((pre) => pre + 1);
  };
  return (
    <button onClick={onClickBtn} className={styles.btn}>
      Click Me,count={count}
    </button>
  );
};
export default UseStateComp;
