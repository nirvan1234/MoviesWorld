import React, { useEffect, useState } from 'react'
import { APIoptions } from '../utils/constant';
import { addTrailerID } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import useMoviesTrailer from '../customhook/useMoviesTrailer';


const VideoBackground = ({videoId}) => {
   const trailer = useMoviesTrailer();
  return (
    <div className='w-screen'>
      <iframe 
      className="w-screen aspect-video" 
      src={"https://www.youtube.com/embed/"+trailer.key}
    //   src={"https://www.youtube.com/embed/"+trailer.key+"?&autoplay=1&mute=1"}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackground
