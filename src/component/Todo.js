import { useState, useEffect } from "react";
import "../css/Todo.css";
function Todo() {
  const [todoShow, setTodoShow] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [chooseBox, setChooseBox] = useState(true);
  const [todoState, setTodoState] = useState(false);

  const TODO_KEY = "todo";

  function todoShowBtn() {
    //투두 팝업창을 띄우는 함수
    if (todoShow === false) {
      setTodoShow(true);
    } else {
      setTodoShow(false);
    }
  }
  useEffect(() => {
    const localTodo = localStorage.getItem(TODO_KEY);

    if (localTodo !== null) {
      const getTodo = JSON.parse(localTodo);
      setTodoList(getTodo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
  }, [todoList]);

  function onChange(event) {
    setTodo(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    const newTodo = {
      id: Date.now(),
      value: todo,
      isDone: todoState,
    };
    setTodoList((currentArray) => [...currentArray, newTodo]);
    setTodo("");
  };

  return (
    <div>
      {todoShow ? (
        <div id="todoBox" className="fadeup">
          <div id="todo-header">
            <span className="margin-left">Inbox ({todoList.length})</span>
          </div>
          <div id="todo-list">
            <ul>
              {todoList.length !== 0
                ? todoList.map((item) => (
                    <li className="margin-left fadeup" id="todo-item">
                      <label>
                        <input id="todo-checkbox" type="checkbox"></input>
                      </label>
                      <span>{item.value}</span>
                    </li>
                  ))
                : null}
            </ul>
          </div>
          <div id="todo-input-box">
            <form className="margin-left" onSubmit={onSubmit}>
              <input
                type="text"
                value={todo}
                onChange={onChange}
                id="todo-input"
                placeholder="New Todo"
              ></input>
            </form>
          </div>
        </div>
      ) : null}
      <button className="styled-btn" onClick={todoShowBtn}>
        Todo
      </button>
    </div>
  );
}

export default Todo;
