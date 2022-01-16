import React, { useRef } from "react";

type AddTodoProps = {
  todoAdded: (todoText: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    //  preventDefaultでDOMの再レンダリングを防ぐ
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.todoAdded(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label>Todo Text</label>
        {}
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD todo</button>
    </form>
  );
};

export default AddTodo;
