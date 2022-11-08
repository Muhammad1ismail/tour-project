import React, { useState } from "react";

import { tourData } from "./data";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState(tourData);

  const removeTour = (id) =>{
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour)
  }

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0){
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          
        </div>
      </main>
    )
  }

  return (
    <main className="main">
      <h1>Get our special deal</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )


}

export default App;
