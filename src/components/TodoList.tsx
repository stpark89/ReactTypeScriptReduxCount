import React, { useState } from "react";
import TodoItem from "./TodoItem";

interface Props {}

interface TodoItemState {
  id: number;
  text: string;
  done: boolean;
}

interface TodoState {
  input: string;
  todoItems: TodoItemState[];
}

let nextTodoId: number = 0;

const TodoList = () => {
  const [todoState, setTodoState] = useState<TodoState>({
    input: "",
    todoItems: []
  });

  const onToggle = (id: number) => {
    const result: TodoItemState[] = todoState.todoItems.map(v => {
      if (v.id === id) {
        v.done = !v.done;
      }
      return v;
    });

    const tmp: TodoState = {
      input: todoState.input,
      todoItems: result
    };

    setTodoState(tmp);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newItemState: TodoItemState = {
      id: nextTodoId++,
      text: todoState.input,
      done: false
    };

    const newItem: TodoState = {
      input: "",
      todoItems:
        todoState.todoItems.length > 0
          ? [...todoState.todoItems, newItemState]
          : [newItemState]
    };
    setTodoState(newItem);
  };

  // Input 값 변경될 때
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tmpState: TodoState = {
      input: e.currentTarget.value,
      todoItems: [...todoState.todoItems]
    };
    setTodoState(tmpState);
  };

  const onRemove = (id: number) => {
    const tmpItem: TodoItemState[] = todoState.todoItems.filter(
      v => v.id !== id
    );
    const newItem: TodoState = {
      input: "",
      todoItems: tmpItem
    };
    setTodoState(newItem);
  };

  return (
    <div>
      <h1>오늘 뭐하지?</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todoState.input} />
        <button type="submit">추가하기</button>
      </form>
      {todoState.todoItems.map(todo => (
        <TodoItem
          key={todo.id}
          done={todo.done}
          onToggle={() => onToggle(todo.id)}
          onRemove={() => onRemove(todo.id)}
          text={todo.text}
        />
      ))}
    </div>
  );
};

export default TodoList;
