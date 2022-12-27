import { useState } from "react";
import "../css/Search.css";
function Search() {
  const url = "https://www.google.com/search?q=";
  function goSearch(e) {
    e.preventDefault();
    // window.location.href = `https://www.google.com/search?q=${this.value}`;
  }
  return (
    <div className="fadein">
      <form>
        <input
          placeholder="search on google"
          onSubmit={goSearch}
          className="search no-outline-input"
        ></input>
      </form>
    </div>
  );
}

export default Search;
