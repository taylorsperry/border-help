import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet'
import { connect } from 'react-redux'
import './_Location.scss';

export class Location extends Component {
  constructor() {
    super();
    this.state = {
      location: [40.650002, -73.949997],
    }
  }

  componentDidMount() {
    this.getLocation()
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition( async (position) =>  {
      const longitude = await position.coords.longitude
      const latitude =  await position.coords.latitude
      this.setState({
        location: [latitude, longitude]
      });
    })
  }
  
  render() {

    return (
      <div className='map-container'>
        <LeafletMap
          id='map'
          center={this.state.location}
          zoom='13'
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