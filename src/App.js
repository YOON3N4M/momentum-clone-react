import { useEffect, useState } from "react";

import "./css/App.css";
import Todo from "./component/Todo";
import Weather from "./component/Weather";
import Background from "./component/Background";
import Search from "./component/Search";
import Setting from "./component/Setting";
import Greeting from "./component/Greeting";
import Clock from "./component/Clock";
import Login from "./component/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [savedUsername, setSavedUsername] = useState("");

  useEffect(() => {
    const localSavedUsername = localStorage.getItem("user");
    setSavedUsername((prev) => localSavedUsername);

    if (localSavedUsername == null) {
      setIsLogin(false); // 로컬스토리지에 user가 null이 아니면 isLogin = true
    } else if (localSavedUsername !== null) {
      setIsLogin(true); // 로컬스토리지에 user가 null이면 isLogin = false
    }
  }, []);

  return (
    <div className="apps">
      {isLogin ? null : (
        <Login setSavedUsername={setSavedUsername} setIsLogin={setIsLogin} />
      )}
      <div id="background-box">
        <Background />
      </div>
      <div
        className={
          "apps" + " apps-wrap" + (isLogin ? " visible" : " invisible")
        }
      >
        <div className="top-bar"></div>
        <div className="top-row">
          <div className="top-left">
            <Search />
          </div>
          <div className="top-center"></div>

          <div className="top-right">
            <Weather />
          </div>
        </div>
        <div className="center-above"></div>
        <div className="center">
          <Clock />
          <Greeting savedUsername={savedUsername} />
        </div>
        <div className="center-below"></div>
        <div className="bottom-row">
          <div className="bottom-left">
            <Setting />
          </div>
          <div className="bottom-center">
            <div id="quote">
              <span
                style={{
                  color: "white",
                }}
              >
                중요한 것은 꺾이지 않는 마음 - 2022
              </span>
              <span></span>
            </div>
          </div>
          <div className="bottom-right">
            <div className="todo-wrap">
              <Todo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
