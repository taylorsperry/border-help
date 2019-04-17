import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import shortid from 'shortid'
import PropTypes from 'prop-types'

export const Intro = ({data}) => {
  
  const displayIntro = data.map(paragraph => 
    <Paragraph key={shortid.generate()} para={paragraph.para}></Paragraph>
    )
  return(
    <div className='category'>
      <h2 className='cat-name'>Introduction</h2>
      {displayIntro}
      <p className='footer'>Data collected from the ACLU</p>
    </div>
  )
}

Intro.propTypes = {
  data: PropTypes.array
}

export default Intro;