import { useState } from "react";
import "../css/Todo.css";
function Todo() {
  const [todoShow, setTodoShow] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const TODO_KEY = "todo";

  function todoShowBtn() {
    //투두 팝업창을 띄우는 함수
    if (todoShow === false) {
      setTodoShow(true);
    } else {
      setTodoShow(false);
    }
  }

  function onChange(event) {
    setTodo(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodoList((currentArray) => [...currentArray, todo]);
    setTodo("");
  };

  return (
    <div>
      {todoShow ? (
        <div id="todoBox">
          <div id="todo-header">header</div>
          <div id="todo-list">list</div>
          <div id="todo-input-box">
            <form onSubmit={onSubmit}>
              <input onChange={onChange} id="todo-input"></input>
            </form>
          </div>
        </div>
      ) : null}
      <button id="todo-btn" onClick={todoShowBtn}>
        Todo
      </button>
    </div>
  );
}

export default Todo;
