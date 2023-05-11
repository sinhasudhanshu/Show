import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShowSummary(props) {
  const [summary, setSummary] = useState(localStorage.getItem("summary"));

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${props.showId}?embed=cast`)
      .then(response => {
        setSummary(response.data.summary);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  const clickHandler = (event) => {
    console.log("clicked");
    console.log(event.target.value);
    
    window.location="/TicketForm";
  };

  return (
    <div>
      <h1>Show Summary</h1>
  
      <p>{summary}</p>

      <button onClick={clickHandler}>Book Ticket</button>
    </div>
  );
}

export default ShowSummary;