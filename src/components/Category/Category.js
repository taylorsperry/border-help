import React from 'react'
import Item from '../Item/Item'

export const Category = ( {data} ) => {
  // console.log(data)
  const displayItems = data.map(item => (
    <Item key={item.id} item={item} />
    ))
  return (
    <div>
      {displayItems}
    </div>
  )
}

export default Category