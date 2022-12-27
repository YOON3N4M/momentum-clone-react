import { useState } from "react";
import "../css/Search.css";
function Search() {
  const [keyword, setKeyword] = useState("");
  let url = `https://www.google.com/search?q=${keyword}`;
  function onSubmit(event) {
    event.preventDefault();
    window.location.href = url;
    // window.location.href = `https://www.google.com/search?q=${this.value}`;
  }

  function onChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="fadein">
      <form onSubmit={onSubmit}>
        <input
          value={keyword}
          onChange={onChange}
          placeholder="search on google"
          className="search no-outline-input font-shadow30"
        ></input>
      </form>
    </div>
  );
}

export default Search;
