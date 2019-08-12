import React from "react";
import TodoLightBox from "./TodoLightBox";
const Todo = () => {
  const openTodoLightbox = () => {
    let todoBox = document.getElementsByClassName("todo-lightbox");
    todoBox[0].classList.toggle("hide");
  };

  return (
    <div className="todo">
      <div>
        <h4 className="white" onClick={openTodoLightbox}>
          Todo
        </h4>
      </div>
      <TodoLightBox />
    </div>
  );
};

export default Todo;
