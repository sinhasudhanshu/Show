//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import ShowSummary from './components/ShowSummary';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



function App() {

  return (
    <div>

      <Router>
        <div className="App">
          {/* <ul>
           <li>
        <Link to="/Home">Home</Link>
      </li>
    
      <li>
        <Link to="/ShowSummary">About Us</Link>
      </li>
    
    </ul> */}
          <Routes>
            <Route exact path='/Home' element={< Home />}></Route>
            <Route exact path='/ShowSummary' element={< ShowSummary/>}></Route>

          </Routes>
        </div>
      </Router>
    </div>

  );

}

export default App;
