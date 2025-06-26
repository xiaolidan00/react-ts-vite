import {useSyncExternalStore} from "react";

let nextId = 0;
let todos = [{id: nextId++, text: "Todo #1"}];
let listeners = [] as Array<() => void>;

export const todosStore = {
  addTodo() {
    todos = [...todos, {id: nextId++, text: "Todo #" + nextId}];
    listeners.forEach((listener) => {
      listener();
    });
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  }
};

const UseSyncExternalStoreComp = () => {
  const todos = useSyncExternalStore(todosStore.subscribe.bind(todosStore), todosStore.getSnapshot.bind(todosStore));
  return (
    <>
      <button onClick={() => todosStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
};
export default UseSyncExternalStoreComp;
