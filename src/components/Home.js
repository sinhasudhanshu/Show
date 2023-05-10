import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [shows, setShows] = useState([]);
  const baseURL = "https://api.tvmaze.com/search/shows?q=all";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setShows(response.data);
    })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const clickHandler = (event) => {
    console.log("clicked");
    const summary=event.target.value;
    console.log(event.target.value);
    localStorage.setItem("summary",summary);
    window.location="/ShowSummary";
  };

  return (
    <div>
      <h1>TV Shows</h1>
      {shows.map((show) => (
        <div key={show.show.id}>
          <h2>{show.show.name}</h2>
          <img src={show.show.image?.medium} alt={show.show.name} />
          <br></br>
         
          <button value={show.show.summary} onClick={clickHandler} >View Summary</button>
          
        </div>
      ))}
    </div>
  );
}
export default Home;
