import React, { Component } from 'react'

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
  }

  toggleDetail = () => {
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    const { title, detail } = this.props.item
    
    let displayDetail
    
    if (this.state.display === true) {
      displayDetail = detail
    } 

    return (
      <div>
        <h2 onClick={this.toggleDetail}>{title}</h2>
        {displayDetail}
      </div>
    )
  }
}

export default Item