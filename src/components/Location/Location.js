import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker, GeoJSON } from 'react-leaflet'
import { connect } from 'react-redux'
import { fetchBorder } from '../../thunks/fetchBorder.js'
import './_Location.scss';

export class Location extends Component {
  constructor() {
    super();
    this.state = {
      location: [40.650002, -73.949997],
      nearestPt: [],
      distance: 0,
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

  getBorder = async () => {
    const url = 'https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/Mexico_and_US_Border/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
    await this.props.fetchBorder(url)
    this.findNearest()
  }

  findNearest = () => {
    let geodist = require('geodist')
    let { border } = this.props
    let { location } = this.state
    let nearestPt = border.map(coord => ({
      coord: [coord[1], coord[0]],
      dist: geodist(location, [coord[1], coord[0]], {exact: true, unit: 'mi'})
    })).sort((a,b) => a.dist-b.dist)[0]
    this.setData(nearestPt)
  }

  setData = (nearestPt) => {
    let distance = Math.ceil(nearestPt.dist)
    this.setState({
      nearestPt: nearestPt.coord,
      distance: distance
    })
  }
  
  render() {
    let nearestMarker
    let msg
    let border 
    let data = {
      "type": "LineString",
      "coordinates": this.props.border,
    }
  
    if(this.state.nearestPt.length) {
      nearestMarker = <Marker position={this.state.nearestPt} />
    }

    if(this.state.distance) {
      msg=`You are ${this.state.distance} miles from the border`
    }

    if(this.props.border.length) {
      border = <GeoJSON 
            data={data}
          />
    }
    
    return (
      <div className='map-container'>
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
          {nearestMarker}
        </LeafletMap>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  border: state.border
})

const mapDispatchToProps = (dispatch) => ({
  fetchBorder: (url) => dispatch(fetchBorder(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Location)