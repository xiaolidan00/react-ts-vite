import {useEffect, useState} from "react";
function useLoading<T>() {
  const [isLoading, setState] = useState(false);
  const load = (aPromise: Promise<T>) => {
    setState(true);
    return aPromise.finally(() => setState(false));
  };
  return [isLoading, load] as [boolean, (aPromise: Promise<T>) => Promise<T>];
}

const UseLoadingComp = () => {
  const [value, setValue] = useState(0);
  const [isLoading, load] = useLoading();
  useEffect(() => {
    load(
      new Promise<number>((resolve) => {
        setTimeout(() => {
          setValue(100);
          resolve(100);
        }, 3000);
      })
    );
  }, []);
  return <h1>{isLoading ? "loading" : value}</h1>;
};
export default UseLoadingComp;
