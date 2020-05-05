import React, { useState, useContext } from "react";
import { MovieContext } from "../context/movie/MovieState";

const Search = (props) => {
  const movieContext = useContext(MovieContext);
  const { search } = movieContext;

  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const callSeachFunction = (e) => {
    e.preventDefault();

    search(searchValue);
    setSearchValue("");
  };

  return (
    <form className="search">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchInputChanges}
      />
      <input type="submit" onClick={callSeachFunction} vakye="SEARCH" />
    </form>
  );
};

export default Search;
