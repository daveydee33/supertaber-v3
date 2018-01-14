import React, {Component} from 'react';

export class TabHeaderItem extends Component {
  render() {

    const {className = '', text} = this.props; // destructuring

    return (
      <button onClick={this.onClick} className={`tablinks ${className}`}>{text}</button>
    );
  }

  onClick = () => {
    console.log(this);
    
  }
}

