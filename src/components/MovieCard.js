import React from 'react'
import { IMG_URL } from '../utils/constant'

const MovieCard = ({imgPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img src={IMG_URL+imgPath}/>
    </div>
  )
}

export default MovieCard
