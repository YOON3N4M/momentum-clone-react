import { useState, useEffect } from "react";
import "../css/Todo.css";
import ShowTodoList from "./ShowTodoList";
import TodoHeader from "./TodoHeader";
function Todo() {
  const [todoShow, setTodoShow] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [chooseBox, setChooseBox] = useState(true);
  const [chosenBox, setChosenBox] = useState("Inbox");
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
      setDoneList(getTodo.filter((p) => p.Done === true));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
    setDoneList(todoList.filter((p) => p.Done === true));
  }, [todoList]);

  function onChange(event) {
    setTodo(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo !== "" && chosenBox === "Inbox") {
      const newTodo = {
        id: Date.now(),
        value: todo,
        Done: false,
      };
      setTodoList((currentArray) => [...currentArray, newTodo]);
      setTodo("");
    } else {
      const newTodo = {
        id: Date.now(),
        value: todo,
        Done: true,
      };
      setTodoList((currentArray) => [...currentArray, newTodo]);
      setTodo("");
    }
  };

  function changeBox() {
    setChooseBox((prev) => !prev);
    if (chosenBox === "Inbox") {
      setChosenBox((prev) => "Done");
    } else {
      setChosenBox((prev) => "Inbox");
    }
  }

  return (
    <div>
      {todoShow ? (
        <div id="todoBox" className="fadeup">
          <TodoHeader
            changeBox={changeBox}
            chosenBox={chosenBox}
            todoList={todoList}
            doneList={doneList}
          />

          <ShowTodoList
            doneList={doneList}
            chooseBox={chooseBox}
            todoList={todoList}
          />
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