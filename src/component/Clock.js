import "../css/Clock.css";
import { useEffect, useState } from "react";

function Clock({ componentHide }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(String(date.getHours()).padStart(2, "0"));
  const [minutes, setMinutes] = useState(
    String(date.getMinutes()).padStart(2, "0")
  );
  const [ampmHours, setAmpmHours] = useState(date.getHours() - 12);
  const [ampm, setAmpm] = useState("");
  const [chooseClock, setChooseClock] = useState(true); // true=24시간제, false=오전오후제
  useEffect(() => {
    setInterval(() => {
      setDate((prev) => new Date());
    }, 1000);
    if (date.getHours() > 11 && date.getHours() < 24) {
      setAmpm("PM");
    } else {
      setAmpm("AM");
    }
  }, []);

  useEffect(() => {
    setHours(String(date.getHours()).padStart(2, "0"));
    setMinutes(String(date.getMinutes()).padStart(2, "0"));
    setAmpmHours(date.getHours() - 12);
  }, [date]);

  return (
    <div id="clock-box">
      {chooseClock ? (
        <span
          id="clock"
          className={
            "fadein" + (componentHide.showClock === true ? "" : " invisible")
          }
          onClick={() => setChooseClock((prev) => !prev)}
        >
          {hours}:{minutes}
        </span>
      ) : (
        <span
          id="clock"
          className={
            "fadein" + (componentHide.showClock === true ? "" : " invisible")
          }
          onClick={() => setChooseClock((prev) => !prev)}
        >
          {ampmHours}:{minutes}
        </span>
      )}
    </div>
  );
}

export default Clock;
