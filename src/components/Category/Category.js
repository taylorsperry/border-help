import React, { Component } from 'react'
import Item from '../Item/Item'
import './_Category.scss'
import PropTypes from 'prop-types'

export class Category extends Component {
 render() {
  const { catName, data, callFetch } = this.props
  if(!data.length) {
    callFetch()
  }
  const displayItems = data.map(item => (
    <Item key={item.id} item={item} />
    ))
  return (
    <div className='category'>
      <h2 className='cat-name'>{catName}</h2>
      {displayItems}
    </div>
  )
}
}

Category.propTypes = {
  catName: PropTypes.string,
  data: PropTypes.array,
  callFetch: PropTypes.func,
}
export default Category