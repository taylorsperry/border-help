import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet'
// import L from 'leaflet'
import { connect } from 'react-redux'
import './_Location.scss';

export class Location extends Component {
  constructor() {
    super();
    this.state = {
      location: [40.650002, -73.949997],
      location2: [],
      distance: 0
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

  getDistance = () => {
    let geodist = require('geodist')
    let currLocation = this.state.location
    let location2 = this.state.location2
    return geodist(currLocation, location2, {exact: true, unit: 'mi'})
  }

  addMarker = (e) => {
    let {lat, lng} = e.latlng
    this.setState({
      location2: [lat, lng]
    })
  }
  
  render() {
    let location2
    let distance 
    let msg = 'click the border to calculate distance'
    if(this.state.location2.length) {
      location2 = <Marker position={this.state.location2} />
      distance = this.getDistance()
      msg = `you are ${distance} miles from the border`
    }
    return (
      <div className='map-container'>
        <p>{msg}</p>
        <LeafletMap
          id='map'
          center={this.state.location}
          zoom='4'
          onClick={this.addMarker}
        >
          <TileLayer 
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={this.state.location} />
          {location2}
        </LeafletMap>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  location: state.location
})

export default connect(mapStateToProps)(Location)