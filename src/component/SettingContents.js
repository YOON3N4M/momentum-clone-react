function SettingContents({
  activedNav,
  img,
  setImgNum,
  setIsimgLoading,
  setCoverHide,
}) {
  function onClick(index) {
    setImgNum((prev) => index);
    setCoverHide((prev) => !prev);
    setIsimgLoading((prev) => !prev);
    setTimeout(() => setIsimgLoading(true), 500);
    setTimeout(() => setCoverHide(true), 1500);
  }

  console.log(img);
  return (
    <div id="setting-contents-box" className="styled-scroll">
      {activedNav === 0 ? <span>0번 입니다.</span> : null}
      {activedNav === 1 ? <span>1번 입니다.</span> : null}
      {activedNav === 2 ? (
        <div id="background-img-box">
          {img.map((img, index) => (
            <img
              onClick={() => onClick(index)}
              key={index}
              className="background-img-list fadein"
              src={img.urls.thumb}
              alt=""
            ></img>
          ))}
        </div>
      ) : null}
      {activedNav === 3 ? <span>3번 입니다.</span> : null}
    </div>
  );
}

export default SettingContents;
