function ShowTodoList({ todoList, chooseBox, doneList }) {
  const inboxList = todoList.filter((p) => p.Done !== true);
  console.log(inboxList);

  return (
    <div id="todo-list">
      <ul>
        {todoList.length === 0 ? null : null}
        {inboxList.length !== 0 && chooseBox === true
          ? inboxList.map((item) => (
              <li className="margin-left fadeup" id="todo-item">
                <label>
                  <input id="todo-checkbox" type="checkbox"></input>
                </label>
                <span>{item.value}</span>
              </li>
            ))
          : null}
        {doneList.length !== 0 && chooseBox === false
          ? doneList.map((item) => (
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
  );
}
export default ShowTodoList;
