import React from 'react'
import Item from '../Item/Item'
import './_Category.scss'

export const Category = ( {data} ) => {
  const displayItems = data.map(item => (
    <Item key={item.id} item={item} />
    ))
  return (
    <div className='category'>
      {displayItems}
    </div>
  )
}

export default Category