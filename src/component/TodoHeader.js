function TodoHeader({ changeBox, chosenBox, todoList, doneList }) {
  const inboxList = todoList.filter((p) => p.Done !== true);

  return (
    <div id="todo-header">
      {chosenBox === "Inbox" ? (
        <button onClick={changeBox} className="styled-btn-black margin-left">
          {chosenBox} ({inboxList.length})
        </button>
      ) : null}
      {chosenBox === "Done" ? (
        <button onClick={changeBox} className="styled-btn-black margin-left">
          {chosenBox} ({doneList.length})
        </button>
      ) : null}
    </div>
  );
}
export default TodoHeader;
