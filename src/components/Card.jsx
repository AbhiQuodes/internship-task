import React from 'react'
import './Card.css'
const Card = ({bgColor,children}) => {
  return (
    <div className='card' style={{ backgroundColor: bgColor }}>
         {children}
    </div>  )
}

export default Card