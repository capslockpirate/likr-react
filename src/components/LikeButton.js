import React from 'react';

const LikeButton = React.createClass({

  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  handleLike(e) {
    e.preventDefault();
    let firebasePost = new Firebase('https://likrlikr.firebaseio.com/posts/');
    firebasePost.push({name: this.state.value});
    this.state.value = '';

  },
  /* when this is a real like button, get current logged in user instead */
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Your Name"
          className="your-name"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleLike}>Like</button>
      </form>
    );
  }
});

export default LikeButton;
