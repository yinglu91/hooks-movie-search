import React, { createContext, useReducer } from "react";
import movieReducer from "./movieReducer";
import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
} from "./types";

const MovieContext = createContext();
const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

const MovieState = (props) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  // all the actions definition

  // search
  const search = async (searchValue) => {
    dispatch({ type: SEARCH_MOVIES_REQUEST });

    const result = await fetch(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`
    );
    const json = await result.json();

    if (json.Response === "True") {
      dispatch({ type: SEARCH_MOVIES_SUCCESS, payload: json.Search });
    } else {
      dispatch({ type: SEARCH_MOVIES_FAILURE, error: json.Error });
    }
  };

  return (
    <MovieContext.Provider
      value={{
        loading: state.loading,
        movies: state.movies,
        errorMessage: state.errorMessage,
        search: search,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export { MovieContext };

export default MovieState;
