import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BookingForm.css";
import { AppContext } from "../store/store";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  let [FormData, setFormData] = useState({
    showId: "",
    name: "",
    email: "",
    mobileno: "",
  });
  let { id } = useParams();
  const navigate = useNavigate();

  let { data, loading } = useContext(AppContext);

  // Find the show with the matching id
  const showDetails = data.find((elem) => elem.show.id === parseInt(id));

  let handleFormSubmit = () => {
    console.log("Form Validation Started");
    const nameRegex = /^[a-zA-Z\s]{1,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
  
    // Validation for name
    if (!FormData.name) {
      alert('Please enter your name.');
    } else if (!nameRegex.test(FormData.name)) {
      alert('Please enter a valid name (up to 20 characters, only letters and spaces).');
    } else if (!FormData.email) {
      alert('Please enter your email.');
    } else if (!emailRegex.test(FormData.email)) {
      alert('Please enter a valid email address.');
    } else if (!FormData.mobileno) {
      alert('Please enter your mobileno.');
    } else if (!mobileRegex.test(FormData.mobileno)) {
      alert('Please enter a valid 10-digit mobile number.');
    } else {
      // All validations pass, proceed with form submission logic
  
      // Save data to localStorage
      const formDataToSave = {
        showId: FormData.showId,
        name: FormData.name,
        email: FormData.email,
        mobileno: FormData.mobileno,
      };
  
      localStorage.setItem('formData', JSON.stringify(formDataToSave));

      // Show alert and navigate to the home page
      alert('Form Submitted successfully!');
      navigate('/'); // Navigate to the home page

      console.log("Form Submitted successfully!");
    }
  };
  
  

  let handleOnChange = (e) => {
    const { id, value } = e.target;

    if (id === "exampleInputName") {
      setFormData((prevData) => ({ ...prevData, name: value }));
    } else if (id === "exampleInputEmail1") {
      setFormData((prevData) => ({ ...prevData, email: value }));
    } else if (id === "exampleInputMobile") {
      setFormData((prevData) => ({ ...prevData, mobileno: value }));
    }
  };

  useEffect(() => {
    console.log("Updated FormData:", FormData);
  }, [FormData]);
  useEffect(() => {
    // Set showId in FormData whenever the id changes
    setFormData((prevData) => ({
      ...prevData,
      showId: `${showDetails.show.id}`,
    }));
  }, [id, showDetails.show.id]);

  return (
    <>
      <form
        className="bookForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="">Booking Form </h1>
        <div className="movieDetails  ">
          <h3>Show Name : {showDetails.show.name}</h3>
          {showDetails.show.schedule.time !== "" &&
            showDetails.show.schedule.days.length > 0 && (
              <p className="fs-2 fw-bolder">
                Schedule : {showDetails.show.schedule.days.join(", ")} at{" "}
                {showDetails.show.schedule.time} hrs ({" "}
                {showDetails.show.runtime}
                min )
              </p>
            )}
        </div>

        <div className="mb-3 ">
          <label htmlFor="exampleInputName" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Plz Enter Your Full Name ..."
            pattern="^[a-zA-Z\s]{1,20}$"
            value={FormData.name}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Plz Enter Your Email ..."
            value={FormData.email}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputMobile" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            id="exampleInputMobile"
            placeholder="Plz Enter Your Mobile Number ..."
            pattern="^\d{10}$"
            value={FormData.mobileno}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-warning  fw-bolder mt-2"
          onClick={handleFormSubmit}
        >
          Confirm To Book
        </button>
      </form>
    </>
  );
};

export default BookingForm;
