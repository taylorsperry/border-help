import React from 'react'
import PropTypes from 'prop-types'

export const Paragraph = ( {para}) => {
  return (
    <div className = 'paragraph'>
      {para}
    </div>
  )
}

Paragraph.propTypes = {
  para: PropTypes.string
}
export default Paragraph