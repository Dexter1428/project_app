import React from 'react'
class MyAccount extends React.Component {
  render() {
    return <div class="container">
  <h2>Blog Post</h2>
  
  <form>
    <div class="form-group">
      <label for="usr">Username:</label>
      <input type="text" class="form-control" id="usr"></input>
    </div>
    <div class="form-group">
      <label for="pwd">Blog Title:</label>
      <input type="password" class="form-control" id="pwd"></input>
    </div>
      
    <div class="form-group">
      <label for="comment">Blogpost:</label>
      <textarea class="form-control" rows="5" id="comment"  placeholder="Please enter your blog content"></textarea>
    </div>
    <button type="submit" class="btn btn-default">Post</button>
  </form>
</div>
  }
}
export default MyAccount