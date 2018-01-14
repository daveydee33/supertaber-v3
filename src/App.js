import React, { Component } from 'react';
// import {SuperTaber, TaberHeader, TabHeaderItem, TaberContent, TaberContentItem} from '../app';
import './App.css';
import {SuperTaber, TaberHeader, TabHeaderItem} from './components';

const header = 'This is SuperTaber';
const content = 'Some content...';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <SuperTaber
          header={header}
          content={content}
        >
        </SuperTaber>

        <TaberHeader>
          <TabHeaderItem text="Days of the week" />
          <TabHeaderItem text="Date Picker" />
          <TabHeaderItem text="User Input" />
        </TaberHeader>


      </div>
    );
  }
}

