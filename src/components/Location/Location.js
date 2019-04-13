import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet'
import { connect } from 'react-redux'
import './_Location.scss';

export class Location extends Component {
  constructor() {
    super();
    this.state = {
      location: [-27.08549, 10.20749],
    }
  }

  

  render() {
    console.log(this.props.location)
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
          <Marker position={this.state.location} />
        </LeafletMap>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  location: state.location
})

export default connect(mapStateToProps)(Location)