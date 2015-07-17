import React, { Component } from 'react';
import {
  Circle,
  LayersContainer,
  Map,
  Marker,
  Popup,
  TileLayer
} from 'react-leaflet';

export default class EventsExample extends Component {
  constructor() {
    super();
    this.state = {
      hasLocation: false,
      latlng: {
        lat: 51.505,
        lng: -0.09
      }
    };
  }

  handleClick() {
    this.refs.map.leafletElement.locate();
  }

  handleLocationFound(e) {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
      accuracy: e.accuracy
    });
  }

  render() {
    const marker = this.state.hasLocation
      ? (
        <LayersContainer>
          <Circle center={this.state.latlng} radius={this.state.accuracy} />
          <Marker position={this.state.latlng}>
            <Popup>
              <span>You are here</span>
            </Popup>
          </Marker>
        </LayersContainer>
      ) : null;

    return (
      <Map ref='map'
        center={this.state.latlng}
        zoom={13}
        onClick={::this.handleClick}
        onLocationfound={::this.handleLocationFound}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {marker}
      </Map>
    );
  }
}
