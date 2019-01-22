import React, { Component } from 'react';
import background from './background1.jpg';
import './App.css';
import Navbar from './Navbar'
import MyAccount from './myaccount'
import Contact from './contact'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class App extends Component {
  render() {
    return (

  <Router>

    
    <div>
        <ul>
          <Navbar/>

        </ul>
          
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/myaccount">My Account</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Route path="/myaccount" component={MyAccount} />
      <Route path="/contact" component={Contact} /> */}
    </div>
  </Router>


    );
  }
}

export default App;
