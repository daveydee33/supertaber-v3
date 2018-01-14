import React, { Component } from 'react';
import TabHeaderItem from './TabHeaderItem.jsx';

export default class TaberHeader extends Component {
  render() {
    return (
      <div className="tab">
        {/* <h1>TaberHeader</h1> */}
        <TabHeaderItem text="Days of the week" />
        <TabHeaderItem text="Date Picker" dave="active" />
        <TabHeaderItem text="User Input" />
      </div>
    )
  }
}