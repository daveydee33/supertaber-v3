import React, { Component } from 'react';
// import TabHeaderItem from './TabHeaderItem.jsx';

export class TaberHeader extends Component {
  render() {

    const {children} = this.props;

    return (
      <div className="tab">
        {children}
      </div>
    )
  }
}