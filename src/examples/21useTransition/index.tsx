import {useTransition, useState} from "react";

function getData() {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });
}
const UseTransitionComp = () => {
  const [isPending, startTransition] = useTransition();

  const [msg, setMsg] = useState("");

  const onClick = () => {
    startTransition(async () => {
      const v = await getData();
      setMsg(v);
    });
  };

  return (
    <div>
      <button onClick={onClick}>start</button>
      {isPending && <p>loading</p>}
      {!isPending && <h1>{msg}</h1>}
    </div>
  );
};
export default UseTransitionComp;
