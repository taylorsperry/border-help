import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer } from 'react-leaflet'
import './_Location.scss';

export class Location extends Component {
  constructor() {
    super();
    this.state = {
      location: [39.739235, -104.990250],
    }
  }

  render() {
    return (
      <div className='map-container'>
        <LeafletMap
          id='map'
          center={this.state.location}
          zoom='6'
        >
          <TileLayer 
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
        </LeafletMap>
      </div>
    )
  }

}

export default Location