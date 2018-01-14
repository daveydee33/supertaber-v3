import React, { Component } from 'react';
import SuperTaber from './SuperTaber.jsx';
import TaberHeader from './TaberHeader.jsx';
import TabHeaderItem from './TabHeaderItem.jsx';
// import {SuperTaber, TaberHeader, TabHeaderItem, TaberContent, TaberContentItem} from '../app';
import './App.css';

const header = 'This is SuperTaber';
const content = 'Some content...';

export default class App extends Component {

  onClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div className="App">
        <SuperTaber
          header={header}
          content={content}
        >
        </SuperTaber>

        <TaberHeader>
          <TabHeaderItem text="Button1" />
        </TaberHeader>


      </div>
    );
  }
}

