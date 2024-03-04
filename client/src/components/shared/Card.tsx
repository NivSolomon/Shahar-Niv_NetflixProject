import React from 'react'

const Card = ({content}) => {
  return (
    <div>
      <img className='imgThumb' src={content.imgThumb}/>
    </div>
  )
}

export default Card