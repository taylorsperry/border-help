import React, { Component } from 'react'
import Paragraph from '../Paragraph/Paragraph'
import shortid from 'shortid'
// import PropTypes from 'prop-types'

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
      displayDetail = detail.map(paragraph => 
        <Paragraph key={shortid.generate()} para={paragraph.para} />
        )
    } 

    return (
      <div className='item'>
        <h3 onClick={this.toggleDetail} className='title'>{title}</h3>
        {displayDetail}
      </div>
    )
  }
}

// Item.propTypes = {
//   item: PropTypes.object,
// }

export default Item