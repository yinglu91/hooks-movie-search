import React, { useContext, useEffect } from "react";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import "./App.css";

import { MovieContext } from "../context/movie/MovieState";

const App = () => {
  const movieContext = useContext(MovieContext);
  const { loading, movies, errorMessage, search } = movieContext;

  useEffect(() => {
    search("man");
  }, []);

  return (
    <div className="App">
      <Header text="HOOKED" />
      <Search />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;

// Build a Movie-Search App Using React (With Hooks)
// https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/

// https://medium.com/better-programming/9-projects-you-can-do-to-become-a-front-end-master-in-2020-97577110cca1
