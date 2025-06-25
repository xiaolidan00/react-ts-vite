import {Suspense, use, type ReactNode, useState} from "react";
import {ErrorBoundary} from "react-error-boundary";
function loadMsg() {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello aaaaa");
    }, 3000);
  });
}
function MsgBox<T>({msgPromise}: {msgPromise: Promise<T>}) {
  const msg = use(msgPromise);
  return (
    <ErrorBoundary fallback={<p>Error</p>}>
      <Suspense fallback={<h1>loading</h1>}>
        <h1>{msg as ReactNode}</h1>
      </Suspense>
    </ErrorBoundary>
  );
}
const UseComp = () => {
  const [messagePromise, setMessagePromise] = useState<Promise<string>>(Promise.resolve(""));
  return (
    <>
      <button onClick={() => setMessagePromise(loadMsg())}>Promise</button>
      <MsgBox<string> msgPromise={messagePromise}></MsgBox>
    </>
  );
};
// 当 promise 在 pending 的时候，展示 suspense 的 fallback。

// 当 promise 是 resolve 的时候，展示 Suspense 的子组件。

// 当 promise 是 reject 的时候，展示 ErrorBoundary 的 fallback。
export default UseComp;
