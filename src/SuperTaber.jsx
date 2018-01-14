import React from 'react';
import {Component} from 'react';

export default class SuperTaber extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
      </div>
    )
  }
}