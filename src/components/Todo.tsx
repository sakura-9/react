import React from "react";

interface TodoProps {
  items: { id: string; text: string }[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div>
      {props.items.map((list) => (
        <p key={list.id}> {list.text} </p>
      ))}
    </div>
  );
};

export default Todo;
