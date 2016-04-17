import React from 'react';

const UnLikeButton = React.createClass({

  handleUnlike() {
    let firebasePost = new Firebase('https://likrlikr.firebaseio.com/posts/' + this.props.liker);
    firebasePost.remove();

  },
  render() {
    return (
        <button onClick={this.handleUnlike}>Unlike</button>
    );
  }
});

export default UnLikeButton;
