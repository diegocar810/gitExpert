import React from 'react'

const GifGridItem = (props) => {
  return (
    <div className='card animate__animated animate__bounce animate__faster'>
        <img src={props.url} alt={props.title} />
        <p>{props.title}</p>

        </div>
  )
}

export default GifGridItem