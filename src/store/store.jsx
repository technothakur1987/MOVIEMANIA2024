import React, { createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import axios from "axios";

// Create context
let AppContext = createContext();

// Provider
let AppProvider = ({ children }) => {
  let initialState = {
    data: [],
    loading: true,
  };

  let [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then(
      function (response) {
        // handle success
        dispatch({ type: "SETDATA", payload: response.data });
      },
      function (error) {
        // handle error
        console.log(error);
      }
    );
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
