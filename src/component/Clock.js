import "../css/Clock.css";

function Clock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return (
    <div id="clock-box">
      <span id="clock">
        {hours}:{minutes}
      </span>
    </div>
  );
}

export default Clock;
