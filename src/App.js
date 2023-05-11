// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import ShowSummary from './components/ShowSummary';
import TicketForm from './components/TicketForm';


function App() {
  //window.location="/Home";
  return (
    <div>

      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route exact path='/Home' element={< Home />}></Route>
            <Route exact path='/ShowSummary' element={< ShowSummary />}></Route>
            <Route exact path='/TicketForm' element={< TicketForm />}></Route>

          </Routes>
        </div>
      </Router>

      {/* <TicketForm/> */}
    </div>


  );

}

export default App;
