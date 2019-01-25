import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import MyAccount from './myaccount'
import Contact from './contact'
import Login from './login'

class Navbar extends Component {
  render() {
    return (

<Router>
<div>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
      <ul class="nav navbar-nav">
      <li><Link to="/" ><a>Home</a></Link></li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><Link to="/myaccount"><a href="#">MyAccount</a></Link></li>
        </ul>
      </li>
       <li><Link to="/contact"><a href="#">Contact</a></Link></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><Link to="/login"><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></Link></li>
    </ul>

    
      
  </div>
</nav>
<div>
    <Route path="/myaccount" component={MyAccount} />
    <Route path="/contact" component={Contact} />
    <Route path="/login" component={Login} />
    </div>
</div>
  
</Router>





    );
  }
}

export default Navbar;