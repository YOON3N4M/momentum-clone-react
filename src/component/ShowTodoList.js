function ShowTodoList({
  todoList,
  chooseBox,
  doneList,
  inboxList,
  setInboxList,
  setDoneList,
  TODO_KEY,
}) {
  function stateChange(item) {
    if (item.Done === false) {
      item.Done = true;
    } else if (item.Done !== false) {
      item.Done = false;
    }
    setInboxList(todoList.filter((p) => p.Done === false));
    setDoneList(todoList.filter((p) => p.Done === true));
    localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
    // setTodoList((prev) => prev.filter((todo) => todo.id !== item.id));
  }

  return (
    <div id="todo-list" className="styled-scroll">
      <ul>
        {todoList.length === 0 ? null : null}

        {inboxList.length === 0 && chooseBox === true ? (
          <div id="if-no-todo">
            <span>no todo here</span>
          </div>
        ) : null}

        {inboxList.length !== 0 && chooseBox === true
          ? inboxList.map((item) => (
              <li
                onClick={() => stateChange(item)}
                key={item.id}
                className="margin-left fadeup"
                id="todo-item"
              >
                <label>
                  <input
                    key={item.id}
                    id="todo-checkbox"
                    type="checkbox"
                  ></input>
                </label>
                <span key={item.id}>{item.value}</span>
              </li>
            ))
          : null}

        {doneList.length === 0 && chooseBox === false ? (
          <div id="if-no-todo">
            <span>no todo here</span>
          </div>
        ) : null}

        {doneList.length !== 0 && chooseBox === false
          ? doneList.map((item) => (
              <li
                onClick={() => stateChange(item)}
                key={item.id}
                className="margin-left fadeup"
                id="todo-item"
              >
                <label>
                  <input id="todo-checkbox" type="checkbox" checked></input>
                </label>
                <span className="done">{item.value}</span>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
export default ShowTodoList;
