import "./css/App.css";
import Todo from "./component/Todo";
import Weather from "./component/Weather";
import Background from "./component/Background";
import Search from "./component/Search";
import Setting from "./component/Setting";

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
        <div id="clock-box">
          <span id="clock"></span>
        </div>
        <div>
          <span id="greeting"></span>
        </div>
      </div>
      <div className="center-below"></div>
      <div className="bottom-row">
        <div className="bottom-left">
          <Setting />
        </div>
        <div className="bottom-center">
          <div id="quote">
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="bottom-right">
          <div>
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
