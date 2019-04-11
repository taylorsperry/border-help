import React from 'react'

export const Item = ({displayItems}) => {
  const { title, detail } = displayItems
  return (
    <div>
      {title}
      {detail}
    </div>
  )
}

export default Item