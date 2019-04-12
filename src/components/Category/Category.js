import React from 'react'
import Item from '../Item/Item'
import './_Category.scss'

export const Category = ( {catName, data} ) => {
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

export default Category