import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import SecondaryContainer from './SecondaryContainer';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[0];

    console.log("main", mainMovie);

    const {overview , original_title , id} = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview ={overview}/>
      <VideoBackground videoId={id} />
      <SecondaryContainer />
    </div>
  )
}

export default MainContainer
