function SettingContents({ activedNav }) {
  return (
    <div id="setting-contents-box">
      {activedNav === 0 ? <span>0번 입니다.</span> : null}
      {activedNav === 1 ? <span>1번 입니다.</span> : null}
      {activedNav === 2 ? <span>포토 입니다.</span> : null}
      {activedNav === 3 ? <span>3번 입니다.</span> : null}
    </div>
  );
}

export default SettingContents;
