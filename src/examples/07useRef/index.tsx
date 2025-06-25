import {useEffect, useRef} from "react";
import styles from "./index.module.scss";

const UseRefComp = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const intervalRef = useRef<number | null>(null);
  const numRef = useRef<number>(0);
  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.innerHTML = "HAHAHAHAAH";
    }
    intervalRef.current = setInterval(() => {
      numRef.current++;
      console.log(numRef.current);
    }, 10000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <>
      <button ref={btnRef} className={styles.btn}>
        Hello World
      </button>
    </>
  );
};

export default UseRefComp;
