import { useState, useEffect } from "react";
import SettingContents from "./SettingContents";
import "../css/Setting.css";

function Setting({ img, setImgNum, setIsimgLoading, setCoverHide }) {
  const [showSetting, setShowSetting] = useState(false);
  const [activedNav, setActivedNav] = useState(0);

  return (
    <div>
      {showSetting ? (
        <div id="setting-box" className="fadeup">
          <div id="setting-nav-box">
            <ul>
              <li
                onClick={() => {
                  setActivedNav(0);
                }}
                className={
                  "setting-nav-item" +
                  " no-shadow" +
                  (activedNav === 0 ? " actived" : "")
                }
              >
                General
              </li>

              <li
                onClick={() => {
                  setActivedNav(1);
                }}
                className={
                  "setting-nav-item" +
                  " no-shadow" +
                  (activedNav === 1 ? " actived" : "")
                }
              >
                Todo
              </li>

              <li
                onClick={() => {
                  setActivedNav(2);
                }}
                className={
                  "setting-nav-item" +
                  " no-shadow" +
                  (activedNav === 2 ? " actived" : "")
                }
              >
                Photos
              </li>
              <li
                onClick={() => {
                  setActivedNav(3);
                }}
                className={
                  "setting-nav-item" +
                  " no-shadow" +
                  (activedNav === 3 ? " actived" : "")
                }
              >
                Quotes
              </li>
            </ul>
          </div>
          <SettingContents
            img={img}
            activedNav={activedNav}
            setImgNum={setImgNum}
            setIsimgLoading={setIsimgLoading}
            setCoverHide={setCoverHide}
          />
        </div>
      ) : null}

      <img
        src="img/setting_icon.png"
        onClick={() => setShowSetting((prev) => !prev)}
        alt=""
        id="setting-icon"
      />
    </div>
  );
}

export default Setting;
