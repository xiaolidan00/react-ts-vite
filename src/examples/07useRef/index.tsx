import {useEffect, useRef} from "react";
import styles from "./index.module.scss";

const UseRefComp = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const intervalRef = useRef<number | null>(null);
  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.innerHTML = "HAHAHAHAAH";
    }
    intervalRef.current = setInterval(() => {
      console.log(1111);
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
