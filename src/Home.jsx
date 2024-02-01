import React, { useContext } from "react";
import "./Home.css";
import { AppContext } from "./store/store";
import Card from "./componenets/Card";
import noimage from './assets/noimage.webp';

const Home = () => {
  let { data, loading } = useContext(AppContext);
 
  
  return (
    <div className="container text-white Home py-2 mb-5">
        <h1 className="pb-3 moviemania">Movie Mania</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((element, index) => (
          
          <Card
            key={index}
            name={element.show.name}
            img={element.show.image?.medium || noimage}
            id={element.show.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
