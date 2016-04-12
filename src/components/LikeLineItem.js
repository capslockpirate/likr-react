import React from 'react';

class LikeLineItem extends React.Component {
  render() {
    const {name, post} = this.props.like;
    return (
      <li>{name} likes this!</li>
    );
  }
}

export default LikeLineItem;
