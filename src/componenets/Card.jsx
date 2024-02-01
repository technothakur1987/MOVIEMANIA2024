import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ name, img, id }) => {
 

  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top " alt={name} />
        <div className="card-body d-flex align-items-center justify-content-evenly">
          <h2 className="card-title">{name}</h2>
          <Link to={`/summary/${id}`} className="btn btn-dark">
            ⇒
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
