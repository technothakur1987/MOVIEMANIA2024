import React, { useContext } from "react";
import "./Summary.css";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../store/store";
import StarRatings from "react-star-ratings";
import noimage from "../assets/noimage.webp";


const Summary = () => {
  let { id } = useParams();

  let { data, loading } = useContext(AppContext);
  

  // Find the show with the matching id
  const showDetails = data.find((elem) => elem.show.id === parseInt(id));

  

  /*name generes language */

  return (
    <>
      <div className="summary p-5 py-2">
        {/* this is summary:{id} */}
        <h1 className="text-start mb-2 moviename">{showDetails.show.name}</h1>
        <div className="row " style={{ minHeight: "50vh" }}>
          <div className="col-sm-3 d-flex justify-content-center align-items-center p-0 ">
            <img
              src={showDetails.show.image?.original || noimage}
              alt={showDetails.show.name}
              className="img-fluid h-100 rounded"
            />
          </div>
          <div className="col-sm-5 p-5 mqsummary">
            <p className="text-start zz">
              {showDetails.show.summary.replace(/<\/?p>|<\/?b>/g, "")}
            </p>
            <div className="btnsection d-flex align-items-center justify-content-evenly">
              <Link to={`/booking/${id}`} className="btn btn-sm btn-warning  fw-bolder">
                Book
              </Link>
              <Link to="/" className="btn btn-sm btn-warning fw-bolder">
                Back To Home{" "}
              </Link>
            </div>
          </div>
          <div className="col-sm-4 py-5 bg-secondary rounded tt ">
            <h6 className="text-start text-capitalize showinfo">
              Show Info :{" "}
            </h6>
            {showDetails.show.network && (
              <p className="text-start fw-bolder">
                Network:{" "}
                <a href={showDetails.show.network.officialSite} target="_blank">
                  {showDetails.show.network.name}
                </a>{" "}
                ({showDetails.show.premiered})
              </p>
            )}

            {showDetails.show.schedule.time !== "" &&
              showDetails.show.schedule.days.length > 0 && (
                <p className="text-start fw-bolder">
                  Schedule: {showDetails.show.schedule.days.join(", ")} at{" "}
                  {showDetails.show.schedule.time} ({showDetails.show.runtime}
                  min)
                </p>
              )}

            <p className="text-start fw-bolder">
              Status: {showDetails.show.status}{" "}
            </p>
            <p className="text-start fw-bolder">
              Show Type: {showDetails.show.type}{" "}
            </p>
            <p className="text-start fw-bolder">
              Generes:{" "}
              {showDetails.show.genres.map((gen, index) => {
                return <span key={index}>{gen} </span>;
              })}{" "}
            </p>
            <p className="text-start fw-bolder">
              Language: {showDetails.show.language}{" "}
            </p>
            {showDetails.show.network &&
              showDetails.show.network.officialSite && (
                <p className="text-start fw-bolder text-justify">
                  Official site:{" "}
                  <a
                    href={showDetails.show.network.officialSite}
                    target="_blank"
                  >
                    {showDetails.show.network.officialSite}
                  </a>
                </p>
              )}

            {showDetails.show.rating.average !== null && (
              <div className="text-start fw-bolder">
                <StarRatings
                  rating={showDetails.show.rating.average}
                  starRatedColor="#ed8f09"
                  numberOfStars={10}
                  name="rating"
                  starDimension="0.9em"
                  starSpacing="5px"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
