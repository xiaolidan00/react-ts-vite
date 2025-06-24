import {useImperativeHandle, useRef, forwardRef, useEffect} from "react";
import styles from "./index.module.scss";
export type CountdownHandle = {
  start: () => void;
};
type CountdownProps = {msg: string};
const Countdown = forwardRef<CountdownHandle, CountdownProps>((props, ref) => {
  useImperativeHandle(ref, () => ({
    // start() has type inference here
    start() {
      alert("Start");
    }
  }));

  return <button className={styles.btn}>{props.msg}</button>;
});
const UseImperativeHandleComp = () => {
  const countdownEl = useRef<CountdownHandle>(null);

  useEffect(() => {
    if (countdownEl.current) {
      // start() has type inference here as well
      countdownEl.current.start();
    }
  }, []);

  return <Countdown ref={countdownEl} msg="Hello" />;
};

export default UseImperativeHandleComp;
