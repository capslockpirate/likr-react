require('normalize.css/normalize.css');
require('styles/App.css');

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire'
import React from 'react';
import LikeLineItem from './LikeLineItem';

const AppComponent = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
      return {
          items: []
      };
  },

  componentWillMount() {
    let firebaseRef = new Firebase('https://likrlikr.firebaseio.com/posts');
    this.bindAsArray(firebaseRef, 'items');
  },

  renderLikes() {
    if (this.state.items) {
      return this.state.items.map(function(like, index) {
        return <LikeLineItem key={index} like={like} />
      });
    } else {
      setTimeout(this.renderLikes, 500);
    }
  },

  render() {
    return (
      <div className="index">
        <ul>
          {this.renderLikes()}
        </ul>

      </div>
    );
  }


})

AppComponent.defaultProps = {
};

export default AppComponent;
