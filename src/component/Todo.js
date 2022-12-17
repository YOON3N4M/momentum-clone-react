import { useState } from "react";
import "../css/Todo.css";
function Todo() {
  const [todoShow, setTodoShow] = useState(false);

  function todoShowBtn() {
    if (todoShow === false) {
      setTodoShow(true);
    } else {
      setTodoShow(false);
    }
  }

  return (
    <div>
      {todoShow ? <div id="todoBox">show</div> : null}
      <button id="todo-btn" onClick={todoShowBtn}>
        Todo
      </button>
    </div>
  );
}

export default Todo;
