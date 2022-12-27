import "../css/Clock.css";
import { useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(String(date.getHours()).padStart(2, "0"));
  const [minutes, setMinutes] = useState(
    String(date.getMinutes()).padStart(2, "0")
  );

  useEffect(() => {
    setInterval(() => {
      setDate((prev) => new Date());
    }, 1000);
  }, []);

  useEffect(() => {
    setHours(String(date.getHours()).padStart(2, "0"));
    setMinutes(String(date.getMinutes()).padStart(2, "0"));
  }, [date]);

  return (
    <div id="clock-box">
      <span id="clock" className="fadein">
        {hours}:{minutes}
      </span>
    </div>
  );
}

export default Clock;
