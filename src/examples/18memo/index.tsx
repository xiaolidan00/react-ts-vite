import {memo, useMemo, useState} from "react";

const MyElement = memo(({name}: {name: string}) => {
  console.log("🚀 ~ index.tsx ~ MyElement ~ name:", name);
  return <h1>{name}</h1>;
});
const MemoComp = () => {
  const [value, setValue] = useState("AAAAAA");

  const msg = useMemo(() => {
    return value + "0";
  }, [value]);
  return (
    <>
      <button onClick={() => setValue("BBBBB")}>setValue</button>
      <MyElement name={value}></MyElement>
      <MyElement name={msg}></MyElement>
    </>
  );
};
export default MemoComp;
