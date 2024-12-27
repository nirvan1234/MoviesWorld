import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);


    return (
        <div className=' bg-black'>
          <div className='-mt-40 relative z-20 pl-12'>
          <MovieList
                title={"Now Playing"}
                movies={movies}
            />
            <MovieList
                title={"Popular"}
                movies={movies}
            />
            <MovieList
                title={"Trending"}
                movies={movies}
            />
            <MovieList
                title={"Now Playing"}
                movies={movies}
            /> 
          </div>
        </div>
    )
}

export default SecondaryContainer
