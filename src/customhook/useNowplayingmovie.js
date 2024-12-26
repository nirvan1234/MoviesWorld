import React ,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { APIoptions } from '../utils/constant';

const useNowplayingmovie = () => {
  const dispatch = useDispatch();
  const getMoviesData = async () =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", APIoptions);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() =>{
    getMoviesData();
  }, []);
}

export default useNowplayingmovie;
