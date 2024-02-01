import React, { useContext } from "react";
import { AppContext } from "./store/store";
import Spinner from "./componenets/spinner";
import './App.css'
import Home from "./Home";
import { BrowserRouter  , Routes, Route } from 'react-router-dom'
import Summary from "./componenets/Summary";
import ScrollToTopButton from "./componenets/ScrollToTopButton";
import BookingForm from "./componenets/BookingForm";
import ErrorPage from "./ErrorPage";




function App() {
  let { data, loading } = useContext(AppContext);
  // console.log(loading)
  // console.log(data)

  return (
    <>
      <BrowserRouter>
        {loading === true ? <Spinner /> : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/summary/:id' element={<Summary/>} />
            <Route path='/booking/:id' element={<BookingForm/>} />
            <Route path='/*' element={<ErrorPage/>} />
          </Routes>
          
        )}<ScrollToTopButton />
      </BrowserRouter>
    </>

  );
}

export default App;
