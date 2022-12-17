import { useState } from "react";
function Search() {
  const url = "https://www.google.com/search?q=";
  function goSearch(e) {
    e.preventDefault();
    // window.location.href = `https://www.google.com/search?q=${this.value}`;
  }
  return (
    <div>
      <form>
        <input onSubmit={goSearch} className="search"></input>
      </form>
    </div>
  );
}

export default Search;
