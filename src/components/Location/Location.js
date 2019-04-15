import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker, GeoJSON } from 'react-leaflet'
import { connect } from 'react-redux'
import './_Location.scss';

export class Location extends Component {
  constructor() {
    super();
    this.state = {
      location: [40.650002, -73.949997],
      nearestPt: [],
      distance: 0,
      border: [],
    }
  }

  componentDidMount() {
    this.getLocation()
    this.getBorder()
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

  findNearest = () => {
    //border coords are long/lat for ex. -96, 25
    let geodist = require('geodist')
    let { border, location } = this.state
    let shortestDist = border.map(coord => ({
      coord : [coord[1], coord[0]],
      dist: geodist(location, [coord[1], coord[0]], {exact: true, unit: 'mi'})
    })).sort((a,b) => a.dist-b.dist)[0]
    this.setData(shortestDist)
  }

  setData = (shortestDist) => {
    let distance = Math.ceil(shortestDist.dist)
    let cleanCoords= shortestDist.coord.map(coord => Math.ceil(coord))
    this.setState({
      nearestPt: cleanCoords,
      distance: distance
    })
  }

  addMarker = (e) => {
    let {lat, lng} = e.latlng
    this.setState({
      nearestPt: [lat, lng]
    })
  }

  getBorder = async () => {
    
    const url = 'https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/Mexico_and_US_Border/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
    try {
      const response = await fetch(url)
      const data = await response.json()
      const coordinates = data.features[0].geometry.paths[0]
      this.setState({
        border: coordinates
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  
  render() {
    let nearestPt
    let msg
    let border 
    let data = {
      "type": "LineString",
      "coordinates": this.state.border,
    }
  
    if(this.state.nearestPt.length) {
      nearestPt = <Marker position={this.state.nearestPt} />
    }

    if(this.state.border.length) {
      border = <GeoJSON 
            data={data}
          />
    }

    if(this.state.distance) {
      msg=`You are ${this.state.distance} miles from the border`
    }
    
    return (
      <div className='map-container'>
        <button onClick={this.findNearest}>Calculate Distance</button>
        {msg}
        <LeafletMap
          id='map'
          center={this.state.location}
          zoom='4'
        >
          {border}
          <TileLayer 
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={this.state.location} />
          {nearestPt}
        </LeafletMap>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  location: state.location
})

export default connect(mapStateToProps)(Location)