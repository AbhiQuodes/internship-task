import React from 'react'
import './Sectionhead.css'

const Sectionhead = ({title ,content}) => {
  return (
    <div className="section-title">
        <h2 class='title'>
            {title}
        </h2>
        <p  className='content'>{content}</p>
    </div>
  )
}

export default Sectionhead