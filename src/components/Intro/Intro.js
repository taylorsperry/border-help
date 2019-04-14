import React from 'react'

export const Intro = ({data}) => {
  
  const displayIntro = data.map(paragraph => 
    <p>{paragraph.para}</p>
    )
  return(
    <div>
    {displayIntro}
    </div>
  )
}

export default Intro;