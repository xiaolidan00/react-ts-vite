import {useCallback, useState, type MouseEvent} from "react";
import styles from "./index.module.scss";
type Props = {
  tabs: string[];
  active: string;
  onChange: (v: string) => void;
};
const MyTab = (prop: Props) => {
  const onClickTab = useCallback((ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    const name = target.dataset.name!;
    prop.onChange(name);
  }, []);
  return (
    <div className={styles.tabs}>
      {prop.tabs.map((item) => (
        <div onClick={onClickTab} className={prop.active == item ? styles.active : ""} key={item} data-name={item}>
          {item}
        </div>
      ))}
    </div>
  );
};
const tabList = ["数学", "语文", "英语"];
const TestTab = () => {
  const [active, setActive] = useState(tabList[0]);
  const changeTab = (v: string) => {
    setActive(v);
  };
  return <MyTab tabs={tabList} active={active} onChange={changeTab}></MyTab>;
};
export default TestTab;
