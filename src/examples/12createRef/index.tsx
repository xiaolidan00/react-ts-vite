import {forwardRef, createRef, type ReactNode, type Ref, useEffect} from "react";

interface Props {
  children?: ReactNode;
  type: "submit" | "button";
}

const FancyButton = forwardRef((props: Props, ref: Ref<HTMLButtonElement>) => (
  <button ref={ref} className="MyClassName" type={props.type}>
    {props.children}
  </button>
));

type ClickableListProps<T> = {
  items: T[];
  onSelect: (item: T) => void;
  listRef?: Ref<HTMLUListElement>;
};
function ClickableList<T>(props: ClickableListProps<T>) {
  return (
    <ul ref={props.listRef}>
      {props.items.map((item, i) => (
        <li key={i} onClick={() => props.onSelect(item)}>
          {item as ReactNode}
        </li>
      ))}
    </ul>
  );
}
const dataList = ["语文", "数学", "英语"];
const CreateRefComp = () => {
  const btnRef = createRef<HTMLButtonElement>();
  const listRef = createRef<HTMLUListElement>();

  useEffect(() => {
    console.log("🚀 ~ index.tsx ~ CreateRefComp ~ btnRef:", btnRef);
    console.log("🚀 ~ index.tsx ~ CreateRefComp ~ listRef:", listRef);
  }, []);
  const onSelect = (item: string) => {
    console.log("🚀 ~ index.tsx ~ onSelect ~ item:", item);
  };

  return (
    <>
      <FancyButton type="button" ref={btnRef}>
        Hello
      </FancyButton>
      <ClickableList<string> items={dataList} onSelect={onSelect} listRef={listRef}></ClickableList>
    </>
  );
};
export default CreateRefComp;
