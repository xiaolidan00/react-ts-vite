import {useCallback, useState, type ChangeEvent, type ChangeEventHandler} from "react";

const EventComp = () => {
  const [value, setValue] = useState("hello");

  const onChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setValue(ev.currentTarget.value);
  }, []);

  const onChange1: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setValue(ev.currentTarget.value);
  };
  return (
    <>
      <input type="text" value={value} onChange={onChange} />
      <input type="text" value={value} onChange={onChange1} />
    </>
  );
};
export default EventComp;
