import {useActionState} from "react";
async function increment(previousState) {
  return previousState + 1;
}

function StatefulForm() {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form>
      {state}
      <button formAction={formAction}>+1</button>
    </form>
  );
}
async function addToCart(prevState, queryData) {
  const itemID = queryData.get("itemID");
  if (itemID === "1") {
    return "已加入购物车";
  } else {
    // 认为添加延迟以使等待更明显。
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    return "无法加入购物车：商品已售罄";
  }
}
function AddToCartForm({itemID, itemTitle}) {
  const [message, formAction, isPending] = useActionState(addToCart, null);
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">加入购物车</button>
      {isPending ? "加载中……" : message}
    </form>
  );
}
const UseActionStateComp = () => {
  return (
    <>
      <StatefulForm></StatefulForm>
      <AddToCartForm itemID="1" itemTitle="JavaScript：权威指南" />
      <AddToCartForm itemID="2" itemTitle="JavaScript：优点荟萃" />
    </>
  );
};
export default UseActionStateComp;
