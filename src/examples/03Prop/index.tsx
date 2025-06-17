import type {ReactNode, MouseEvent} from "react";
import styles from "./index.module.scss";
type Props = {
  type: "primary" | "info" | "danger";
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
const MyButton = (prop: Props) => {
  return (
    <button className={styles.button + " " + styles[prop.type]} onClick={prop.onClick}>
      {prop.children}
    </button>
  );
};
const PropComp = () => {
  const onBtnClick = (ev: MouseEvent<HTMLButtonElement>) => {
    const target = ev.target as HTMLButtonElement;
    alert(target.className);
  };
  return (
    <>
      <h1>Prop</h1>
      <MyButton type="primary" onClick={onBtnClick}>
        Primary
      </MyButton>

      <MyButton type="info" onClick={onBtnClick}>
        Info
      </MyButton>

      <MyButton type="danger" onClick={onBtnClick}>
        Danger
      </MyButton>
    </>
  );
};

export default PropComp;
