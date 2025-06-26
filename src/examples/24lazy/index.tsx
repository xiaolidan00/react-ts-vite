import {lazy, Suspense, useState} from "react";

// 添加一个固定的延迟时间，以便你可以看到加载状态
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
const HelloElement = lazy(() => delayForDemo(import("./hello")));
const LazyComp = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <button onClick={() => setIsShow(true)}>show Lazy Hello</button>
      {isShow && (
        <Suspense fallback={<p>loading</p>}>
          <HelloElement />
        </Suspense>
      )}
    </>
  );
};
export default LazyComp;
