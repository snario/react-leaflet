import React, { Component } from 'react';

export default class LayersContainer extends Component {
  render() {
    const { children, map } = this.props;
    const layers = React.Children.map(children, child => {
      return child ? React.cloneElement(child, {map}) : null;
    });

    return <div style={{display: 'none'}}>{layers}</div>;
  }
}
