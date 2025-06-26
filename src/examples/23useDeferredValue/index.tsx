import {use, Suspense, useState, useDeferredValue, useMemo} from "react";
const dataList = ["语文", "数学", "英语"];
function getData(key: string) {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      if (key) {
        console.log("🚀 ~ index.tsx ~ setTimeout ~ key:", key);
        resolve(dataList.filter((a) => a.indexOf(key) >= 0));
      } else resolve(dataList);
    }, 2000);
  });
}
function SearchResults({query}) {
  const res = use<string[]>(query);
  if (res.length === 0) {
    return (
      <p>
        No matches for <i>"{query}"</i>
      </p>
    );
  }
  return (
    <ul>
      {res.map((a) => (
        <li key={a}>{a}</li>
      ))}
    </ul>
  );
}
const UseDeferredValueComp = () => {
  const [searchkey, setSearchKey] = useState("");
  const deferredQuery = useDeferredValue(searchkey);

  return (
    <>
      <label>
        课程:
        <input value={searchkey} onChange={(e) => setSearchKey(e.currentTarget.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={getData(deferredQuery)} />
      </Suspense>
    </>
  );
};
export default UseDeferredValueComp;
