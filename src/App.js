import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = ()=> {


  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" country='in' category="general" />} />
          <Route exact path="/business" element={<News key="business" country='in' category="business" />} />
          <Route exact path="/sports" element={<News key="sports" country='in' category="sports" />} />
          <Route exact path="/science" element={<News key="science" country='in' category="science" />} />
          <Route exact path="/technology" element={<News key="technology" country='in' category="technology" />} />
          <Route exact path="/health" element={<News key="health" country='in' category="health" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" country='in' category="entertainment" />} />
        </Routes>
      </Router>
    </div>
  )

}
export default App;


