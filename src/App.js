import "./css/App.css";
import Todo from "./component/Todo";
import Weather from "./component/Weather";
import Background from "./component/Background";
import Search from "./component/Search";
import Setting from "./component/Setting";
import Greeting from "./component/Greeting";
import Clock from "./component/Clock";

function App() {
  return (
    <div className="apps">
      <div id="backgroundBox">
        <Background />
      </div>
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
        <Greeting />
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
              가나다라마바사아자차카타파하하하하하하하ㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㄴㅇㅁㅇ
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
  );
}

export default App;
