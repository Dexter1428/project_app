import React from 'react'

class Login extends React.Component {
    render() {
        return <div class="container">
  <h2>Login</h2>
  <form action="/action_page.php">
    <div class="form-group">
      <label for="username">Username:</label>
      <input type="username" class="form-control" id="username" placeholder="Enter username" name="username"></input>
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"></input>
    </div>
    <button type="submit" class="btn btn-default">Login</button>
  </form>
</div> 
                }
}
export default Login