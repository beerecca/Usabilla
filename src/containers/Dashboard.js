import React, { Component } from 'react';
import FeedbackItem from '../components/FeedbackItem';

export default class Dashboard extends Component {

  render() {
    return (
      <div>
        <h1 className="title">Dashboard</h1>
        <FeedbackItem/>
      </div>
    )
  }
}