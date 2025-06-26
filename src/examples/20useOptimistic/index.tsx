import {startTransition, useOptimistic, useRef, useState} from "react";
async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}
function Thread({messages, sendMessageAction}) {
  const formRef = useRef<HTMLFormElement>(null);
  function formAction(formData) {
    addOptimisticMessage(formData.get("message"));
    formRef.current!.reset();
    startTransition(async () => {
      await sendMessageAction(formData);
    });
  }
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, (state, newMessage) => [
    {
      text: newMessage,
      sending: true
    },
    ...state
  ]);

  return (
    <>
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="请输入发送信息" />
        <button type="submit">发送</button>
      </form>
      {optimisticMessages.map((message, index) => (
        <p key={index}>
          {message.text}
          {!!message.sending && <small>（发送中……）</small>}
        </p>
      ))}
    </>
  );
}

const UseOptimisticComp = () => {
  const [messages, setMessages] = useState<Array<{text: string; sending?: boolean}>>([
    {text: "你好，在这儿！", sending: false}
  ]);
  async function sendMessageAction(formData) {
    const sentMessage = await deliverMessage(formData.get("message"));
    startTransition(() => {
      setMessages((messages) => {
        return messages.concat({text: sentMessage});
      });
    });
  }
  return <Thread messages={messages} sendMessageAction={sendMessageAction} />;
};
export default UseOptimisticComp;
