import {useMemo, useState} from "react";

function MyElement(p: {value: string[] | string}) {
  return useMemo(() => {
    if (Array.isArray(p.value)) {
      return (
        <ul>
          {p.value.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return <h1>{p.value}</h1>;
    }
  }, [p.value]);
}
const data = [
  "语文",
  "数学",
  "英语",
  "物理",
  "化学",
  "生物",
  "历史",
  "地理",
  "政治",
  "信息技术",
  "体育",
  "美术",
  "音乐"
];
const UseMemoComp = () => {
  const [searchKey, setSearchKey] = useState("");
  const list = useMemo(() => {
    if (searchKey) return data.filter((a) => a.indexOf(searchKey) >= 0);
    return data;
  }, [searchKey]);

  return (
    <>
      <input type="text" onChange={(e) => setSearchKey(e.currentTarget.value)} />
      {list.map((it) => (
        <p key={it}>{it}</p>
      ))}
      <MyElement value={"AAAAAA"}></MyElement>

      <MyElement value={["1111", "22222", "33333", "4444", "5555"]}></MyElement>
    </>
  );
};
export default UseMemoComp;
